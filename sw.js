const CACHE_NAME = "calli-ui-v2";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./src/main.js",
  "./src/app.js",
  "./src/data.js",
  "./src/styles/main.css",
  "./src/components/AppShell.js",
  "./src/components/MetricGrid.js",
  "./src/components/PageHeader.js",
  "./src/components/Timeline.js",
  "./src/utils/html.js",
  "./icons/icon-192.svg",
  "./icons/icon-512.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
