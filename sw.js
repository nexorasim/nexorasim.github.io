const CACHE_NAME = 'nexorasim-iot-v3.0.0';
const STATIC_CACHE = 'nexorasim-static-v3.0.0';
const DYNAMIC_CACHE = 'nexorasim-dynamic-v3.0.0';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/css/fluent-pearl-iot-theme.css',
  '/css/glassmorphism-iot-premium.css',
  '/js/three-webgpu-iot-init.js',
  '/js/gsap-iot-master.js',
  '/js/azure-iot-hub-client.js',
  '/js/premium-iot-scroll-animations.js',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=Segoe+UI:wght@300;400;500;600;700&display=swap',
  'https://unpkg.com/@microsoft/mgt@4/dist/bundle/mgt-loader.js',
  'https://unpkg.com/@fluentui/web-components@3/dist/web-components.js',
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js',
  'https://unpkg.com/three@0.158.0/build/three.module.js'
];

const DYNAMIC_ASSETS = [
  '/api/',
  '/telemetry/',
  '/iot-hub/',
  '/digital-twins/'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker: Static assets cached');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker: Cache installation failed', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activated');
        return self.clients.claim();
      })
  );
});

// Fetch event - serve cached content and implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Handle different types of requests
  if (isStaticAsset(request.url)) {
    event.respondWith(cacheFirst(request));
  } else if (isAPIRequest(request.url)) {
    event.respondWith(networkFirst(request));
  } else if (isIoTTelemetry(request.url)) {
    event.respondWith(networkOnly(request));
  } else {
    event.respondWith(staleWhileRevalidate(request));
  }
});

// Cache strategies
async function cacheFirst(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Cache first strategy failed:', error);
    return new Response('Offline content not available', { status: 503 });
  }
}

async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('Network failed, trying cache:', error);
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    return new Response('Content not available offline', { status: 503 });
  }
}

async function networkOnly(request) {
  try {
    return await fetch(request);
  } catch (error) {
    console.error('Network only request failed:', error);
    return new Response(JSON.stringify({
      error: 'Real-time data not available',
      offline: true,
      timestamp: new Date().toISOString()
    }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(DYNAMIC_CACHE);
  const cachedResponse = await cache.match(request);
  
  const fetchPromise = fetch(request).then((networkResponse) => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  }).catch(() => cachedResponse);
  
  return cachedResponse || fetchPromise;
}

// Helper functions
function isStaticAsset(url) {
  return STATIC_ASSETS.some(asset => url.includes(asset)) ||
         url.includes('.css') ||
         url.includes('.js') ||
         url.includes('.png') ||
         url.includes('.jpg') ||
         url.includes('.svg') ||
         url.includes('.woff') ||
         url.includes('.woff2');
}

function isAPIRequest(url) {
  return url.includes('/api/') ||
         url.includes('/graphql') ||
         url.includes('microsoft.com') ||
         url.includes('azure.com');
}

function isIoTTelemetry(url) {
  return url.includes('/telemetry/') ||
         url.includes('/iot-hub/') ||
         url.includes('/digital-twins/') ||
         url.includes('/signalr/') ||
         url.includes('realtime');
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('Service Worker: Background sync triggered', event.tag);
  
  if (event.tag === 'iot-telemetry-sync') {
    event.waitUntil(syncIoTTelemetry());
  } else if (event.tag === 'user-actions-sync') {
    event.waitUntil(syncUserActions());
  }
});

async function syncIoTTelemetry() {
  try {
    // Sync cached telemetry data when back online
    const cache = await caches.open(DYNAMIC_CACHE);
    const requests = await cache.keys();
    
    const telemetryRequests = requests.filter(req => 
      req.url.includes('/telemetry/') || req.url.includes('/iot-hub/')
    );
    
    for (const request of telemetryRequests) {
      try {
        await fetch(request);
        console.log('Synced telemetry data:', request.url);
      } catch (error) {
        console.error('Failed to sync telemetry:', error);
      }
    }
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

async function syncUserActions() {
  try {
    // Sync user actions stored in IndexedDB
    const db = await openDB();
    const actions = await getAllPendingActions(db);
    
    for (const action of actions) {
      try {
        const response = await fetch(action.url, {
          method: action.method,
          headers: action.headers,
          body: action.body
        });
        
        if (response.ok) {
          await removePendingAction(db, action.id);
          console.log('Synced user action:', action.type);
        }
      } catch (error) {
        console.error('Failed to sync action:', error);
      }
    }
  } catch (error) {
    console.error('User actions sync failed:', error);
  }
}

// Push notifications for IoT alerts
self.addEventListener('push', (event) => {
  console.log('Service Worker: Push notification received');
  
  const options = {
    body: 'IoT device status update available',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge-72x72.png',
    vibrate: [200, 100, 200],
    data: {
      url: '/#iot-dashboard'
    },
    actions: [
      {
        action: 'view',
        title: 'View Dashboard',
        icon: '/icons/action-view.png'
      },
      {
        action: 'dismiss',
        title: 'Dismiss',
        icon: '/icons/action-dismiss.png'
      }
    ]
  };
  
  if (event.data) {
    const payload = event.data.json();
    options.body = payload.message || options.body;
    options.data = { ...options.data, ...payload.data };
  }
  
  event.waitUntil(
    self.registration.showNotification('NexoraSIM IoT Alert', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  console.log('Service Worker: Notification clicked', event.action);
  
  event.notification.close();
  
  if (event.action === 'view') {
    event.waitUntil(
      clients.openWindow(event.notification.data.url || '/')
    );
  } else if (event.action === 'dismiss') {
    // Just close the notification
    return;
  } else {
    // Default action - open the app
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// IndexedDB helpers for offline storage
function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('nexorasim-iot-db', 1);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      
      if (!db.objectStoreNames.contains('pendingActions')) {
        const store = db.createObjectStore('pendingActions', { keyPath: 'id', autoIncrement: true });
        store.createIndex('timestamp', 'timestamp');
        store.createIndex('type', 'type');
      }
      
      if (!db.objectStoreNames.contains('telemetryCache')) {
        const store = db.createObjectStore('telemetryCache', { keyPath: 'deviceId' });
        store.createIndex('timestamp', 'timestamp');
      }
    };
  });
}

function getAllPendingActions(db) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['pendingActions'], 'readonly');
    const store = transaction.objectStore('pendingActions');
    const request = store.getAll();
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
  });
}

function removePendingAction(db, id) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['pendingActions'], 'readwrite');
    const store = transaction.objectStore('pendingActions');
    const request = store.delete(id);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve();
  });
}

// Performance monitoring
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PERFORMANCE_MARK') {
    console.log('Performance mark:', event.data.name, event.data.timestamp);
  }
});

console.log('Service Worker: Loaded and ready for NexoraSIM IoT v3.0.0');