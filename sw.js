self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('lampeweb').then((cache) => {
          return cache.addAll([
            '/index.html',
            '/style.css',
          ]);
        })
    );
});

self.addEventListener('fetch', (event) => {});