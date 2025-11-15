/**
 * NexoraCore Service Worker
 * Microsoft-compliant PWA implementation
 */

const CACHE_NAME = 'nexorasim-v2.0.0';
const STATIC_CACHE = 'nexorasim-static-v2.0.0';
const DYNAMIC_CACHE = 'nexorasim-dynamic-v2.0.0';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.svg',
  '/robots.txt',
  '/sitemap.xml'
];

// Microsoft Graph API endpoints to cache
const API_CACHE_PATTERNS = [
  /^https:\/\/graph\.microsoft\.com\/v1\.0\//,
  /^https:\/\/login\.microsoftonline\.com\//
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('NexoraCore SW: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('NexoraCore SW: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('NexoraCore SW: Installation complete');
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('NexoraCore SW: Activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && 
                cacheName !== DYNAMIC_CACHE && 
                cacheName !== CACHE_NAME) {
              console.log('NexoraCore SW: Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('NexoraCore SW: Activation complete');
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip Chrome extension requests
  if (url.protocol === 'chrome-extension:') {
    return;
  }

  // Handle different types of requests
  if (url.origin === location.origin) {
    // Same-origin requests (app assets)
    event.respondWith(handleAppRequest(request));
  } else if (API_CACHE_PATTERNS.some(pattern => pattern.test(request.url))) {
    // Microsoft Graph API requests
    event.respondWith(handleApiRequest(request));
  } else {
    // External resources
    event.respondWith(handleExternalRequest(request));
  }
});

// Handle app requests (SPA routing support)
async function handleAppRequest(request) {
  const url = new URL(request.url);
  
  // Validate request origin for security
  if (request.referrer && !isValidOrigin(request.referrer)) {
    return new Response('Forbidden', { status: 403 });
  }
  
  try {
    // Try cache first
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    // Try network with security headers
    const networkResponse = await fetch(request, {
      credentials: 'same-origin',
      mode: 'same-origin'
    });
    
    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
    
  } catch (error) {
    console.log('NexoraCore SW: Network failed, serving fallback');
    
    // For navigation requests, serve index.html (SPA fallback)
    if (request.mode === 'navigate') {
      const fallback = await caches.match('/index.html');
      if (fallback) {
        return fallback;
      }
    }
    
    // For other requests, return offline page or error
    return new Response(
      JSON.stringify({ 
        error: 'Offline', 
        message: 'Content not available offline' 
      }),
      {
        status: 503,
        statusText: 'Service Unavailable',
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}

// Handle Microsoft Graph API requests
async function handleApiRequest(request) {
  // Validate API request
  if (!isValidApiRequest(request)) {
    return new Response('Unauthorized', { status: 401 });
  }
  
  try {
    // Always try network first for API requests
    const networkResponse = await fetch(request, {
      credentials: 'include',
      mode: 'cors'
    });
    
    // Cache successful GET requests
    if (networkResponse.ok && request.method === 'GET') {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
    
  } catch (error) {
    console.log('NexoraCore SW: API request failed, checking cache');
    
    // Try cache as fallback
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return error response
    return new Response(
      JSON.stringify({ 
        error: 'Network Error', 
        message: 'API temporarily unavailable' 
      }),
      {
        status: 503,
        statusText: 'Service Unavailable',
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}

// Handle external requests (CDN, fonts, etc.)
async function handleExternalRequest(request) {
  try {
    // Try cache first for external resources
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    // Try network
    const networkResponse = await fetch(request);
    
    // Cache successful responses for external resources
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
    
  } catch (error) {
    console.log('NexoraCore SW: External request failed');
    
    // Return minimal error response
    return new Response('', {
      status: 503,
      statusText: 'Service Unavailable'
    });
  }
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('NexoraCore SW: Background sync triggered');
  
  if (event.tag === 'nexora-sync') {
    event.waitUntil(performBackgroundSync());
  }
});

async function performBackgroundSync() {
  try {
    // Sync offline actions when network is available
    console.log('NexoraCore SW: Performing background sync');
    
    // Implementation would sync offline user actions
    // with Microsoft Graph API when connection is restored
    
  } catch (error) {
    console.error('NexoraCore SW: Background sync failed:', error);
  }
}

// Push notification handling
self.addEventListener('push', (event) => {
  console.log('NexoraCore SW: Push notification received');
  
  const options = {
    body: event.data ? event.data.text() : 'NexoraSIM notification',
    icon: '/favicon.svg',
    badge: '/favicon.svg',
    tag: 'nexorasim-notification',
    requireInteraction: false,
    actions: [
      {
        action: 'open',
        title: 'Open NexoraSIM'
      },
      {
        action: 'dismiss',
        title: 'Dismiss'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('NexoraSIM', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  console.log('NexoraCore SW: Notification clicked');
  
  event.notification.close();
  
  if (event.action === 'open') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Message handling from main thread
self.addEventListener('message', (event) => {
  console.log('NexoraCore SW: Message received:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});

// Security validation functions
function isValidOrigin(referrer) {
  const allowedOrigins = [
    'https://nexorasim.github.io',
    'https://portal.nexorasim.com',
    'http://localhost:3000'
  ];
  try {
    const origin = new URL(referrer).origin;
    return allowedOrigins.includes(origin);
  } catch {
    return false;
  }
}

function isValidApiRequest(request) {
  const authHeader = request.headers.get('Authorization');
  return authHeader && authHeader.startsWith('Bearer ');
}

console.log('NexoraCore Service Worker loaded successfully');