import type { FastifyInstance } from 'fastify';

const RSS_URL = 'https://ccfddl.com/conference/deadlines_en.xml';

function toBeijingDate(raw: string) {
  const match = raw.match(/(\d{4}-\d{2}-\d{2})\s+(\d{2}:\d{2}:\d{2})/);
  if (!match) return '';
  // CCFDDL publishes UTC-12 deadlines. Convert to Asia/Shanghai (UTC+8).
  const utc = new Date(match[1] + 'T' + match[2] + '-12:00');
  if (Number.isNaN(utc.getTime())) return '';
  const parts = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Shanghai', hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).formatToParts(utc).reduce<Record<string, string>>((out, part) => { out[part.type] = part.value; return out; }, {});
  return parts.year + '-' + parts.month + '-' + parts.day + 'T' + parts.hour + ':' + parts.minute + ':00+08:00';
}

export async function ccfddlRoutes(app: FastifyInstance) {
  app.get('/api/ccfddl', async (request, reply) => {
    const query = String((request.query as { query?: string }).query || '').trim().toLowerCase();
    if (!query) return reply.code(400).send({ error: { message: '缺少会议名称' } });
    const response = await fetch(RSS_URL);
    if (!response.ok) return reply.code(502).send({ error: { message: '无法读取 CCFDDL' } });
    const xml = await response.text();
    const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(match => match[1]);
    const result = items.map(item => {
      const title = (item.match(/<title>([\s\S]*?)<\/title>/) || [,''])[1].replace(/<!\[CDATA\[|\]\]>/g, '').trim();
      const description = (item.match(/<description>([\s\S]*?)<\/description>/) || [,''])[1].replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
      const deadline = toBeijingDate(description);
      return { title, deadline, abstract: /abstract/i.test(title) };
    }).filter(item => item.deadline && item.title.toLowerCase().includes(query));
    const latest = result.filter(item => new Date(item.deadline) >= new Date(new Date().toISOString().slice(0, 10))).sort((a, b) => a.deadline.localeCompare(b.deadline));
    return { data: { venue: query, abstractDeadline: latest.find(item => item.abstract)?.deadline || '', paperDeadline: latest.find(item => !item.abstract)?.deadline || '', source: 'CCFDDL', timezone: 'Asia/Shanghai' } };
  });
}
