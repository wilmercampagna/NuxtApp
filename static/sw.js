importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/02b177f3001172536877.js",
    "revision": "5654e984b773fc2bdab5f4ca44f7a693"
  },
  {
    "url": "/_nuxt/1ceb19f995fd6c8db232.js",
    "revision": "8938453fcafd992ce3a813303d05ea41"
  },
  {
    "url": "/_nuxt/33a9bacdec4652323d0f.js",
    "revision": "16b8583a8609cb5f9eff8a607443a0db"
  },
  {
    "url": "/_nuxt/3ad0fc81a765c757322e.js",
    "revision": "cdfccc861621f34f175b07d506b78f37"
  },
  {
    "url": "/_nuxt/54e1d0f79fc9ecc247cc.js",
    "revision": "180c59978ac575b81afd0dd2b7231ec5"
  },
  {
    "url": "/_nuxt/5a72c702b2c63ccdb5bc.js",
    "revision": "c0a84c5971e031967a40f61ab1a7a10c"
  },
  {
    "url": "/_nuxt/613bb58a1af75afa6931.js",
    "revision": "c9f2ce89edec2b689d215ab8c86975b1"
  },
  {
    "url": "/_nuxt/6606e4b3faad4a9a1dde.js",
    "revision": "6a53273ed639116da6a7420bf8019371"
  },
  {
    "url": "/_nuxt/69815eb937acca341f40.js",
    "revision": "da335d1bc197f1df223ba3018a255e45"
  },
  {
    "url": "/_nuxt/a30c7e2824c6589c7bfe.js",
    "revision": "8c0d895c62038a59de1d8846770e282d"
  },
  {
    "url": "/_nuxt/ca728286f48ac6ef9bf5.js",
    "revision": "a0699bd0e2dc3caa13e6048e82a0fbe4"
  }
], {
  "cacheId": "second-nuxt-app",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





