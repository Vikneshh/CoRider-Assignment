import { precacheAndRoute } from "workbox-precaching";

// @ts-ignore: __WB_MANIFEST is injected by workbox at build time
precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener("install", (event: ExtendableEvent) => {
  console.log("Service Worker installing.",event);
});

self.addEventListener("activate", (event: ExtendableEvent) => {
  console.log("Service Worker activating.",event);
});

self.addEventListener("fetch", (event: FetchEvent) => {
  console.log("Fetching:", event.request.url);
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
