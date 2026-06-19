const CACHE_VERSION = "learnup-offline-v1";
const CORE_CACHE = `${CACHE_VERSION}-core`;
const RUNTIME_CACHE = `${CACHE_VERSION}-runtime`;
const CORE_URLS = ["/", "/offline.html", "/lecture", "/francais", "/mathematiques", "/communication"];

function isSafeLearningPath(pathname) {
  return pathname === "/"
    || pathname.startsWith("/lecture")
    || pathname.startsWith("/francais")
    || pathname.startsWith("/mathematiques")
    || pathname.startsWith("/communication")
    || pathname.startsWith("/placement");
}

function canStore(response) {
  return response && response.ok && (response.type === "basic" || response.type === "default");
}

async function store(cacheName, request, response) {
  if (!canStore(response)) return;
  const cache = await caches.open(cacheName);
  await cache.put(request, response.clone());
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

async function cacheDocumentAssets(response, cache) {
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("text/html")) return;
  const html = await response.clone().text();
  const assets = new Set();
  const pattern = /(?:src|href)=["']([^"']+)["']/g;
  let match;
  while ((match = pattern.exec(html)) !== null) {
    try {
      const url = new URL(match[1], self.location.origin);
      if (url.origin !== self.location.origin) continue;
      if (url.pathname.startsWith("/_next/static/") || /\.(?:css|js|woff2?|png|jpe?g|webp|gif|svg|mp3|wav|ogg)$/i.test(url.pathname)) {
        assets.add(url.href);
      }
    } catch {
      // Ignore malformed references.
    }
  }
  await Promise.all(Array.from(assets).map(async (url) => {
    try {
      const asset = await fetch(url);
      if (canStore(asset)) await cache.put(url, asset);
    } catch {
      // One optional asset must not cancel the offline preparation.
    }
  }));
}

self.addEventListener("message", (event) => {
  if (event.data?.type === "PREPARE_OFFLINE") {
    event.waitUntil((async () => {
      const urls = Array.from(new Set([...CORE_URLS, ...(event.data.urls || [])]));
      const cache = await caches.open(CORE_CACHE);
      let completed = 0;
      for (const url of urls) {
        try {
          const response = await fetch(url, { credentials: "include" });
          if (canStore(response)) {
            await cache.put(url, response.clone());
            await cacheDocumentAssets(response, cache);
          }
        } catch {
          // Continue with the remaining routes.
        }
        completed += 1;
        await notifyClients({ type: "OFFLINE_PROGRESS", completed, total: urls.length });
      }
      await notifyClients({ type: "OFFLINE_READY" });
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
});
