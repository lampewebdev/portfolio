self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('lampeweb').then((cache) => {
          return cache.addAll([
            '/',
            '/img/',
            '/index.html',
            '/style.css',
            '/manifest.json',
          ]);
        })
    );
});