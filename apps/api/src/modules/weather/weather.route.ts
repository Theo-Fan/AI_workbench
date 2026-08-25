import type { FastifyInstance } from 'fastify';

const forecastEndpoint = 'https://api.open-meteo.com/v1/forecast';
const airQualityEndpoint = 'https://air-quality-api.open-meteo.com/v1/air-quality';
const geocodeEndpoint = 'https://geocoding-api.open-meteo.com/v1/search';
const photonEndpoint = 'https://photon.komoot.io/api/';

async function requestWeather(endpoint: string, params: Record<string, string | number | undefined>, headers?: HeadersInit) {
  const url = new URL(endpoint);
  for (const [key, value] of Object.entries(params)) if (value !== undefined && value !== '') url.searchParams.set(key, String(value));
  let response: Response;
  try {
    response = await fetch(url, { headers, signal: AbortSignal.timeout(8_000) });
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
      // Open-Meteo's best-match mode combines the most suitable available
      // model for the requested coordinates and keeps all detail fields intact.
      forecast_days: boundedInteger(query.forecast_days, 4, 1, 7)
    });
  });

  app.get('/api/weather/air-quality', async request => {
    const query = request.query as Record<string, string | undefined>;
    const latitude = numberParam(query.latitude);
    const longitude = numberParam(query.longitude);
    if (!Number.isFinite(latitude) || latitude < -90 || latitude > 90 || !Number.isFinite(longitude) || longitude < -180 || longitude > 180) {
      throw Object.assign(new Error('请提供有效的空气质量坐标'), { statusCode: 400 });
    }
    return requestWeather(airQualityEndpoint, {
      latitude,
      longitude,
      current: query.current || 'european_aqi,us_aqi,pm10,pm2_5',
      timezone: query.timezone || 'auto'
    });
  });

  app.get('/api/weather/geocode', async request => {
    const query = request.query as Record<string, string | undefined>;
    const name = String(query.name || '').trim();
    if (!name || name.length > 120) throw Object.assign(new Error('请提供有效的城市名称'), { statusCode: 400 });
    const count = boundedInteger(query.count, 1, 1, 10);
    // The simplified province/city picker submits canonical Latin city names,
    // which Open-Meteo resolves directly and more quickly than a full address.
    if (/^[\x00-\x7F]+$/.test(name)) {
      return requestWeather(geocodeEndpoint, {
        name,
        count,
        language: query.language || 'zh',
        format: query.format || 'json'
      });
    }
    try {
      const places = await requestWeather(photonEndpoint, {
        q: name,
        limit: count
      }, {
        Accept: 'application/geo+json, application/json',
        'User-Agent': 'AI-Workspace/0.1 (personal dashboard)'
      }) as { features?: Array<Record<string, any>> };
      if (Array.isArray(places.features) && places.features.length) {
        return {
          results: places.features.map(place => {
            const properties = place.properties || {};
            const coordinates = place.geometry?.coordinates || [];
            const district = properties.district || properties.locality || properties.county || '';
            const city = properties.city || properties.county || '';
            return {
              id: `${properties.osm_type || ''}${properties.osm_id || ''}`,
              name: properties.name || district || city,
              latitude: Number(coordinates[1]),
              longitude: Number(coordinates[0]),
              country: properties.country || '',
              country_code: String(properties.countrycode || '').toUpperCase(),
              admin1: properties.state || '',
              admin2: city,
              admin3: district,
              display_name: [properties.name, district, city, properties.state, properties.country].filter(Boolean).join(', ')
            };
          })
        };
      }
    } catch {
      // Fall through to Open-Meteo's global place index if Photon is
      // temporarily unavailable or does not recognize the submitted address.
    }
    return requestWeather(geocodeEndpoint, {
      name,
      count,
      language: query.language || 'zh',
      format: query.format || 'json'
    });
  });
}
