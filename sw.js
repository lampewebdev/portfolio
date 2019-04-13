self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('lampeweb').then(function(cache) {
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
  