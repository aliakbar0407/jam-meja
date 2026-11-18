// Service worker Jam Meja: app shell tersimpan di cache supaya jalan offline.
// Naikkan angka VERSI setiap kali kamu mengubah file, supaya HP mengambil versi baru.
const VERSI = 'jam-meja-v1';
const ASET = [
  './',
  'index.html',
  'manifest.webmanifest',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/maskable-512.png',
  'fonts/fredoka-500.woff2',
  'fonts/fredoka-700.woff2',
  'fonts/bangers-400.woff2'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSI).then((c) => c.addAll(ASET)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k !== VERSI).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;

  // Halaman utama: coba jaringan dulu (biar update cepat), cadangan dari cache.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const salinan = res.clone();
          caches.open(VERSI).then((c) => c.put('index.html', salinan));
          return res;
        })
        .catch(() => caches.match('index.html'))
    );
    return;
  }

  // File lain: cache dulu.
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then(
      (hit) =>
        hit ||
        fetch(req).then((res) => {
          const salinan = res.clone();
          caches.open(VERSI).then((c) => c.put(req, salinan));
          return res;
        })
    )
  );
});
