'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"404.html": "b5c38387253fd282639e5570b17dcf90",
"assets/AssetManifest.bin": "e6be82cc70a2bf5930cb45aa13b14df7",
"assets/AssetManifest.bin.json": "481adaf2a432edb00bd09b73950c224e",
"assets/AssetManifest.json": "9c14352a79911b693273a1e34e80e299",
"assets/assets/images/apple/mac15.jpg": "00ee7cc762339b9cc81d98f6a8f45375",
"assets/assets/images/apple/mac17.png": "32c0270b747a11a0adfe6f8b7ce3f17c",
"assets/assets/images/apple/mac18.jpeg": "0f50586e21ede67dcaded0fe9745dd43",
"assets/assets/images/apple/mac19.jpeg": "8e1488f740df65439782a85015de482c",
"assets/assets/images/apple/mac20.jpeg": "7421e0dc170e59baa748d68c2471c1c0",
"assets/assets/images/apple/mac21.jpeg": "3d90aee2e44fbf8bbefb1b5e2ae7f8a7",
"assets/assets/images/apple/mac22.jpeg": "42eba9620bf02289b19434976c9944b9",
"assets/assets/images/bg.jpeg": "ffc8aa8b276f74c828b4e89e270d9fc9",
"assets/assets/images/bg2.jpeg": "ff9841d3636f45e605f5b1c5cdc45f08",
"assets/assets/images/black.jpeg": "6c9d1163eee139197fb89c3a50643d2e",
"assets/assets/images/compdell.jpeg": "3ee914f602cdfcc6093fef29d27896e6",
"assets/assets/images/comphp.jpeg": "0f15d572f7135d7ea203fc5ee0198ce8",
"assets/assets/images/compmac.jpeg": "02648c90f4d02b59f98377c1cdd6a055",
"assets/assets/images/computers.jpeg": "3ab4ffde4df9d54ede967302c093378d",
"assets/assets/images/dark.jpeg": "6afb2ab8483163eb2fd7eb33737d1209",
"assets/assets/images/del/alien.jpeg": "2fc17c17cd61a14b7b244e687bf218ea",
"assets/assets/images/del/g15.jpeg": "dfd0538af49de0b868f31a97fab8ea40",
"assets/assets/images/del/ins16.jpeg": "274ca5358e35f6d3b40dfad44191119a",
"assets/assets/images/del/insp15.jpeg": "b01184900bd65778de46c0efea8a3f98",
"assets/assets/images/del/latitude.jpeg": "1bd0c50841f5b9696bee58ecb986733f",
"assets/assets/images/del/xps13.jpeg": "2d998a60fb6d4cb3d3132d852b9ccef4",
"assets/assets/images/del/xps16.jpeg": "cb31dbce17761afaf870579ec4a02b78",
"assets/assets/images/del2/3030.jpeg": "db501b3bade62c39e99683e77d2045ad",
"assets/assets/images/del2/7020.jpeg": "ea9f9445d2fdf69e4605ec6c59bb5a81",
"assets/assets/images/del2/7090.jpeg": "c1c3c8716765ce326d691b1d51ab1cc6",
"assets/assets/images/del2/7420.jpeg": "faf08007703845de57b6097a108c0163",
"assets/assets/images/del2/insp23.jpeg": "6bd8f9e5d5e9959b057f0d2cc4f3f7c3",
"assets/assets/images/del2/xps23.jpeg": "bc1bf8a9112cbc8366b3538c865672b4",
"assets/assets/images/hp/elite.jpeg": "0567263ab237a99d9139f53e64a4647c",
"assets/assets/images/hp/envy.jpeg": "cf8784fa51eabf44fe44945a082d7414",
"assets/assets/images/hp/envy24.jpeg": "867f6108d026227393bd303c8eaa5153",
"assets/assets/images/hp/pavillion.jpeg": "64d8b3f4ced4e9a102af082fe55d3551",
"assets/assets/images/hp/tower.jpeg": "8ae651a026a0da6fd33dd42d15670925",
"assets/assets/images/hp/victus.jpeg": "01168528e4d5cc18dbcb293f2623efe9",
"assets/assets/images/hpl/chrome.jpeg": "8ae7b7bcc31b53a3ea1cfc0d692a425e",
"assets/assets/images/hpl/elitebook.jpeg": "f0f59635c7663380a716360ac117c2e9",
"assets/assets/images/hpl/hp17.jpeg": "0b66f063fe170e6034b539b5d213223e",
"assets/assets/images/hpl/hp360.jpeg": "3a18494cced61ddd820c429ba9c4b580",
"assets/assets/images/hpl/hppavv.jpeg": "6e04cd08ad508f0aac6a537a4727b341",
"assets/assets/images/hpl/omen.jpeg": "b61ba645a0b912da993b99444e33ad92",
"assets/assets/images/hpl/spec.jpeg": "10851eabe2ef024b6b0a34337baf0ff9",
"assets/assets/images/lapidell.jpeg": "ec1c1e9b28612a6287060c8223f21d2a",
"assets/assets/images/lapihp.jpeg": "bb1321aab1a3a91eb2c33797a90c8c42",
"assets/assets/images/lapimac.jpeg": "071da9c29ab1fe98bf854dc02582ddd3",
"assets/assets/images/logo.jpg": "1b24f3671963a5acef2c7c986f725d7c",
"assets/assets/images/mac/macbook17.jpg": "00409c32929b4d695a38123ad786fb73",
"assets/assets/images/mac/macbook18.jpg": "b8b93bea051fb115dba0b58ab5e28396",
"assets/assets/images/mac/macbook19.jpg": "b70de919a81a23942e8915c948417b1d",
"assets/assets/images/mac/macbook20.jpg": "e7dd0df8bae8862b9e70620b87253b58",
"assets/assets/images/mac/macbook21.png": "c0e5a802084bd91412763347aae6a008",
"assets/assets/images/mac/macbook22.png": "4cfe88309949e35c6660a9c310797b1f",
"assets/assets/images/mac/macbook23.png": "b50ef919bfbd9fd57abb1ec8e75d5a89",
"assets/assets/images/mac/macbook24.png": "805562edc09dcc013d5557a886ad7d80",
"assets/assets/images/nett.jpeg": "8bbc976db5575a21937d7d23bfa46b8b",
"assets/assets/images/nett1.jpeg": "1357cfd96f69202c52d320c289c85585",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "575fb12236bec70c24ba6d7d95512999",
"assets/NOTICES": "5d4ebcc886c75153ac80434dd953a05f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "bf8d5d57ea6cd06712a233a2d35c4798",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.ico": "44cc2009a8fb1f7905d7e11b6ef26699",
"favicon.jpg": "1b24f3671963a5acef2c7c986f725d7c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "de3800c3867e54c38499b70a57d6d5c0",
"icons/favicon.png": "bfa6690d04c4148beec6bf3d589a2950",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e7123c0f298205b1209e81f5529cebb4",
"/": "e7123c0f298205b1209e81f5529cebb4",
"main.dart.js": "c6a459cb4259f8ff117f96b04d138b61",
"manifest.json": "54838c7e0ff226226a5f26e5e10c3589",
"sitemap.xml": "e2977c931829ff698cd0331ac4022471",
"version.json": "9364799cf58a0491d3b2aad931958aaf"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
