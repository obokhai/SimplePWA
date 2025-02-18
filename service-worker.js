importScripts("https://cdnjs.cloudflare.com/ajax/libs/workbox-sw/7.3.0/workbox-sw.js");

workbox.routing.registerRoute(
    ({request}) => request.destination ==="image",
    new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
    ({request}) => request.destination ==="script",
    new workbox.strategies.NetworkFirst()
)