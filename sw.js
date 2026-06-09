const CACHE = 'loveandco-v1';
const ASSETS = [
  './',
  './index.html',
  './Love and Company.gif'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
