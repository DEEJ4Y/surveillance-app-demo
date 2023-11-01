// sw.js
workbox.core.setCacheNameDetails({ prefix: "home-nas-surveillance-system" });

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("home-nas-surveillance-system").then((cache) => {
      return cache.addAll(["/", "/index.html", "/offline.html"]); // Add the paths you want to cache
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
