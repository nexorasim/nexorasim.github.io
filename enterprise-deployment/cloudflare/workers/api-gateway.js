// NexoraSIM eSIM API Gateway - Cloudflare Worker
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    const corsHeaders = {
      'Access-Control-Allow-Origin': 'https://portal.nexorasim.com',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    try {
      const authHeader = request.headers.get('Authorization');
      if (!authHeader?.startsWith('Bearer ')) {
        return new Response('Unauthorized', { status: 401 });
      }

      const token = authHeader.substring(7);
      const isValid = await validateJWT(token);
      
      if (!isValid) {
        return new Response('Invalid token', { status: 401 });
      }

      const clientIP = request.headers.get('CF-Connecting-IP');
      const rateLimitKey = `rate_limit:${clientIP}`;
      const currentCount = await env.KV.get(rateLimitKey);
      
      if (currentCount && parseInt(currentCount) > 100) {
        return new Response('Rate limit exceeded', { status: 429 });
      }

      await env.KV.put(rateLimitKey, (parseInt(currentCount) || 0) + 1, { expirationTtl: 3600 });

      const azureUrl = `https://nexorasim-func-prod.azurewebsites.net${url.pathname}`;
      const response = await fetch(azureUrl, {
        method: request.method,
        headers: {
          ...Object.fromEntries(request.headers),
          'X-Forwarded-For': clientIP,
        },
        body: request.body,
      });

      return new Response(response.body, {
        status: response.status,
        headers: { ...Object.fromEntries(response.headers), ...corsHeaders },
      });

    } catch (error) {
      return new Response('Internal Server Error', { status: 500, headers: corsHeaders });
    }
  }
};

async function validateJWT(token) {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return false;
    
    const payload = JSON.parse(atob(parts[1]));
    const now = Math.floor(Date.now() / 1000);
    
    return payload.exp > now && payload.aud === 'nexorasim-api';
  } catch {
    return false;
  }
}