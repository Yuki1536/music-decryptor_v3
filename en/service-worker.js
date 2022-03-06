importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

importScripts(
  "precache-manifest.610520fac084519615a95a767e8aee9a.js"
);

workbox.core.setCacheNameDetails({prefix: "music-decryptor_en"});

workbox.core.skipWaiting();

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
