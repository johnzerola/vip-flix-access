// Service Worker para cache agressivo e performance mobile
const CACHE_NAME = 'privacy-vip-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

// Assets críticos para cache imediato
const CORE_ASSETS = [
  '/',
  '/lovable-uploads/721e3e0c-8717-45de-9ad8-646bd50a5449.png',
  '/manifest.json',
  '/favicon.ico'
];

// Assets estáticos para cache
const STATIC_ASSETS = [
  '/favicon-32x32.png',
  '/favicon-16x16.png', 
  '/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      // Cache core assets
      caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(CORE_ASSETS);
      }),
      // Cache static assets
      caches.open(STATIC_CACHE).then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      })
    ]).then(() => {
      self.skipWaiting();
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      self.clients.claim();
    })
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip external domains except images
  if (url.origin !== location.origin && !request.url.includes('lovable-uploads')) {
    return;
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(request).then((response) => {
        // Only cache successful responses
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        const responseToCache = response.clone();

        // Determine which cache to use
        let cacheName = DYNAMIC_CACHE;
        if (CORE_ASSETS.includes(url.pathname) || url.pathname === '/') {
          cacheName = CACHE_NAME;
        } else if (STATIC_ASSETS.includes(url.pathname)) {
          cacheName = STATIC_CACHE;
        }

        caches.open(cacheName).then((cache) => {
          cache.put(request, responseToCache);
        });

        return response;
      }).catch(() => {
        // Fallback para quando offline
        if (request.destination === 'document') {
          return caches.match('/');
        }
      });
    })
  );
});