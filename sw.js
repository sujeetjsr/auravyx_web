/**
 * sw.js — Service Worker for cache-first instant page loads
 * Cache version: bump this string to force-update caches on deploy
 */
const CACHE = 'aura-v1';

// All static assets to pre-cache on install
const PRECACHE = [
    './',
    './index.html',
    './bundle.html',
    './details.html',
    './payment.html',
    './styles.css',
    './bundle.css',
    './script.js',
    './bundle.js',
    './details.js',
    './payment.js',
    './QR.jpg',
];

// Install: pre-cache all static files
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE).then(cache => cache.addAll(PRECACHE))
    );
    self.skipWaiting();
});

// Activate: delete old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});

// Fetch: cache-first for static files, network-first for CDN
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);

    // Skip non-GET, chrome-extension, and API calls
    if (event.request.method !== 'GET') return;
    if (!url.protocol.startsWith('http')) return;

    // CDN resources (fonts, icons) — network first, fallback to cache
    if (url.hostname !== self.location.hostname) {
        event.respondWith(
            fetch(event.request)
                .then(res => {
                    const clone = res.clone();
                    caches.open(CACHE).then(c => c.put(event.request, clone));
                    return res;
                })
                .catch(() => caches.match(event.request))
        );
        return;
    }

    // Local assets — cache first (instant), update in background
    event.respondWith(
        caches.match(event.request).then(cached => {
            const networkFetch = fetch(event.request).then(res => {
                if (res && res.status === 200) {
                    const clone = res.clone();
                    caches.open(CACHE).then(c => c.put(event.request, clone));
                }
                return res;
            });
            return cached || networkFetch;
        })
    );
});
