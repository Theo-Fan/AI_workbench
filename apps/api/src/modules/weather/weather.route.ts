import type { FastifyInstance } from 'fastify';

const forecastEndpoint = 'https://api.open-meteo.com/v1/forecast';
const geocodeEndpoint = 'https://geocoding-api.open-meteo.com/v1/search';

async function requestWeather(endpoint: string, params: Record<string, string | number | undefined>) {
  const url = new URL(endpoint);
  for (const [key, value] of Object.entries(params)) if (value !== undefined && value !== '') url.searchParams.set(key, String(value));
  let response: Response;
  try {
    response = await fetch(url, { signal: AbortSignal.timeout(8_000) });
  } catch (error) {
    throw Object.assign(new Error(error instanceof DOMException && error.name === 'TimeoutError' ? '天气服务请求超时' : '无法连接天气服务'), { statusCode: 503 });
  }
  if (!response.ok) throw Object.assign(new Error(`天气服务返回 HTTP ${response.status}`), { statusCode: 502 });
  return response.json();
}

const numberParam = (value: string | undefined) => value === null || value === undefined || value === '' ? Number.NaN : Number(value);
const boundedInteger = (value: string | undefined, fallback: number, min: number, max: number) => Math.max(min, Math.min(max, Number.parseInt(value || '', 10) || fallback));

export async function weatherRoutes(app: FastifyInstance) {
  app.get('/api/weather/forecast', async request => {
    const query = request.query as Record<string, string | undefined>;
    const latitude = numberParam(query.latitude);
    const longitude = numberParam(query.longitude);
    if (!Number.isFinite(latitude) || latitude < -90 || latitude > 90 || !Number.isFinite(longitude) || longitude < -180 || longitude > 180) {
      throw Object.assign(new Error('请提供有效的天气坐标'), { statusCode: 400 });
    }
    return requestWeather(forecastEndpoint, {
      latitude,
      longitude,
      current: query.current,
      daily: query.daily,
      timezone: query.timezone || 'auto',
      forecast_days: boundedInteger(query.forecast_days, 4, 1, 7)
    });
  });

  app.get('/api/weather/geocode', async request => {
    const query = request.query as Record<string, string | undefined>;
    const name = String(query.name || '').trim();
    if (!name || name.length > 120) throw Object.assign(new Error('请提供有效的城市名称'), { statusCode: 400 });
    return requestWeather(geocodeEndpoint, {
      name,
      count: boundedInteger(query.count, 1, 1, 10),
      language: query.language || 'zh',
      format: query.format || 'json',
      latitude: query.latitude,
      longitude: query.longitude
    });
  });
}
