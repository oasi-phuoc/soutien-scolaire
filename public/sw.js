const CACHE_VERSION = "learnup-offline-v2";
const CORE_CACHE = `${CACHE_VERSION}-core`;
const RUNTIME_CACHE = `${CACHE_VERSION}-runtime`;

const APP_ROUTES = [
  "/",
  "/lecture",
  "/francais",
  "/mathematiques",
  "/communication",
  "/compte",
  "/placement",
  "/offline.html",
];

function isSafeLearningPath(pathname) {
  return pathname === "/"
    || pathname.startsWith("/lecture")
    || pathname.startsWith("/francais")
    || pathname.startsWith("/mathematiques")
    || pathname.startsWith("/communication")
    || pathname.startsWith("/placement")
    || pathname.startsWith("/compte");
}

function canStore(response) {
  return response && response.ok && (response.type === "basic" || response.type === "default");
}

async function store(cacheName, request, response) {
  if (!canStore(response)) return;
  const cache = await caches.open(cacheName);
  await cache.put(request, response.clone());
}

function sameOriginPath(value) {
  try {
    const url = new URL(value, self.location.origin);
    if (url.origin !== self.location.origin) return null;
    return `${url.pathname}${url.search}`;
  } catch {
    return null;
  }
}

async function cacheUrlWithLinkedAssets(cache, url) {
  const response = await fetch(url, { credentials: "include" });
  if (!canStore(response)) return 0;

  let bytes = 0;
  const clone = response.clone();
  try {
    const blob = await clone.blob();
    bytes += blob.size;
  } catch {
    // Size is only used for progress display.
  }
  await cache.put(url, response.clone());

  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("text/html")) return bytes;

  const html = await response.text();
  const linked = new Set();
  for (const match of html.matchAll(/\b(?:src|href)=["']([^"']+)["']/g)) {
    const path = sameOriginPath(match[1]);
    if (!path) continue;
    if (
      path.startsWith("/_next/")
      || path.startsWith("/assets/")
      || path.startsWith("/vocab/")
      || path.endsWith(".css")
      || path.endsWith(".js")
      || path.endsWith(".woff2")
    ) {
      linked.add(path);
    }
  }

  await Promise.all([...linked].map(async (assetUrl) => {
    try {
      const assetResponse = await fetch(assetUrl, { credentials: "include" });
      if (!canStore(assetResponse)) return;
      try {
        const blob = await assetResponse.clone().blob();
        bytes += blob.size;
      } catch {
        // ignore size
      }
      await cache.put(assetUrl, assetResponse.clone());
    } catch {
      // One failed linked asset must not cancel the page.
    }
  }));

  return bytes;
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CORE_CACHE)
      .then((cache) => cache.addAll(["/offline.html"]))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names
      .filter((name) => name.startsWith("learnup-offline-") && !name.startsWith(CACHE_VERSION))
      .map((name) => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith("/api/") || url.pathname.startsWith("/auth/") || url.pathname.startsWith("/admin")) return;

  const isNavigation = request.mode === "navigate" || request.destination === "document";
  const isStaticAsset = url.pathname.startsWith("/_next/static/")
    || ["style", "script", "image", "font", "audio", "video"].includes(request.destination);

  if (isNavigation && isSafeLearningPath(url.pathname)) {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        await store(RUNTIME_CACHE, request, response);
        return response;
      } catch {
        const cached = await caches.match(request, { ignoreSearch: true });
        return cached || caches.match("/offline.html");
      }
    })());
    return;
  }

  if (isStaticAsset || isSafeLearningPath(url.pathname)) {
    event.respondWith((async () => {
      const cached = await caches.match(request);
      if (cached) return cached;
      try {
        const response = await fetch(request);
        await store(RUNTIME_CACHE, request, response);
        return response;
      } catch {
        return new Response("", { status: 503, statusText: "Offline" });
      }
    })());
  }
});

async function notifyClients(message) {
  const clients = await self.clients.matchAll({ includeUncontrolled: true });
  clients.forEach((client) => client.postMessage(message));
}

self.addEventListener("message", (event) => {
  if (event.data?.type === "PREPARE_OFFLINE") {
    event.waitUntil((async () => {
      try {
        // Fetch the asset manifest
        const manifestRes = await fetch("/offline-manifest.json");
        const manifest = manifestRes.ok ? await manifestRes.json() : { assets: [] };
        const assetUrls = manifest.assets || [];
        const routeUrls = manifest.routes || [];

        // Build full URL list: app routes + all static assets + generated lesson routes
        const urls = [...new Set([...APP_ROUTES, ...routeUrls, ...assetUrls])];
        const cache = await caches.open(CORE_CACHE);
        let completed = 0;
        let downloadedBytes = 0;
        const total = urls.length;
        const totalBytes = manifest.totalBytes || 0;

        // Download in batches of 6 for network efficiency
        const BATCH = 6;
        for (let i = 0; i < urls.length; i += BATCH) {
          const batch = urls.slice(i, i + BATCH);
          await Promise.all(batch.map(async (url) => {
            try {
              downloadedBytes += await cacheUrlWithLinkedAssets(cache, url);
            } catch {
              // One failed asset must not cancel the whole download
            }
            completed += 1;
            await notifyClients({ type: "OFFLINE_PROGRESS", completed, total, downloadedBytes, totalBytes });
          }));
        }

        await notifyClients({ type: "OFFLINE_READY", downloadedBytes, totalBytes });
      } catch {
        await notifyClients({ type: "OFFLINE_ERROR" });
      }
    })());
  }

  if (event.data?.type === "CLEAR_OFFLINE") {
    event.waitUntil((async () => {
      await Promise.all([caches.delete(CORE_CACHE), caches.delete(RUNTIME_CACHE)]);
      const cache = await caches.open(CORE_CACHE);
      await cache.add("/offline.html");
      await notifyClients({ type: "OFFLINE_CLEARED" });
    })());
  }

  if (event.data?.type === "GET_MANIFEST_SIZE") {
    event.waitUntil((async () => {
      try {
        const res = await fetch("/offline-manifest.json");
        const manifest = res.ok ? await res.json() : {};
        await notifyClients({ type: "MANIFEST_SIZE", totalBytes: manifest.totalBytes || 0 });
      } catch {
        await notifyClients({ type: "MANIFEST_SIZE", totalBytes: 0 });
      }
    })());
  }

  if (event.data?.type === "GET_CACHE_STATUS") {
    event.waitUntil((async () => {
      try {
        const res = await fetch("/offline-manifest.json");
        const manifest = res.ok ? await res.json() : { assets: [] };
        const assetUrls = manifest.assets || [];
        const routeUrls = manifest.routes || [];
        const cache = await caches.open(CORE_CACHE);
        let cachedAssetBytes = 0;
        let missingAssets = 0;

        for (const url of [...assetUrls, ...routeUrls]) {
          const response = await cache.match(url);
          if (!response) {
            missingAssets += 1;
            continue;
          }
          try {
            const blob = await response.clone().blob();
            cachedAssetBytes += blob.size;
          } catch {
            missingAssets += 1;
          }
        }

        await notifyClients({
          type: "CACHE_STATUS",
          cachedAssetBytes,
          expectedBytes: manifest.totalBytes || 0,
          missingAssets,
        });
      } catch {
        await notifyClients({
          type: "CACHE_STATUS",
          cachedAssetBytes: 0,
          expectedBytes: 0,
          missingAssets: 1,
        });
      }
    })());
  }
});
