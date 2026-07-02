const CACHE_VERSION = "learnup-offline-v4";
const CORE_CACHE = `${CACHE_VERSION}-core`;
const RUNTIME_CACHE = `${CACHE_VERSION}-runtime`;
const OFFLINE_META_URL = "/__learnup-offline-meta";

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

function normalizeAssetEntries(manifest) {
  if (Array.isArray(manifest.assetEntries)) return manifest.assetEntries;
  return (manifest.assets || []).map((url) => ({ url, size: 0, revision: null }));
}

async function readOfflineMeta(cache) {
  const response = await cache.match(OFFLINE_META_URL);
  if (!response) return { assets: {} };
  try {
    const meta = await response.json();
    return { assets: meta.assets || {} };
  } catch {
    return { assets: {} };
  }
}

async function writeOfflineMeta(cache, meta) {
  await cache.put(
    OFFLINE_META_URL,
    new Response(JSON.stringify({ assets: meta.assets || {} }), {
      headers: { "Content-Type": "application/json" },
    }),
  );
}

async function responseBytes(response) {
  try {
    const blob = await response.clone().blob();
    return blob.size;
  } catch {
    return 0;
  }
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
  const response = await fetch(url, { credentials: "include", cache: "reload" });
  if (!canStore(response)) return 0;

  let bytes = await responseBytes(response);
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
      const cached = await cache.match(assetUrl);
      if (cached) return;
      const assetResponse = await fetch(assetUrl, { credentials: "include", cache: "reload" });
      if (!canStore(assetResponse)) return;
      bytes += await responseBytes(assetResponse);
      await cache.put(assetUrl, assetResponse.clone());
    } catch {
      // One failed linked asset must not cancel the page.
    }
  }));

  return bytes;
}

async function cacheManifestAssetIfNeeded(cache, entry, meta) {
  const cached = await cache.match(entry.url);
  const currentRevision = meta.assets?.[entry.url];
  if (cached && entry.revision && currentRevision === entry.revision) {
    return { bytes: 0, skipped: true };
  }

  const response = await fetch(entry.url, { credentials: "include", cache: "reload" });
  if (!canStore(response)) return { bytes: 0, skipped: false };

  const bytes = await responseBytes(response);
  await cache.put(entry.url, response.clone());
  meta.assets[entry.url] = entry.revision || `${bytes}`;
  return { bytes, skipped: false };
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
  const isCoAudio = url.pathname.startsWith("/expression/co/") && /\.(?:mp3|wav|ogg|m4a|aac)$/i.test(url.pathname);
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

  if (isCoAudio) {
    event.respondWith((async () => {
      try {
        return await fetch(request);
      } catch {
        const cached = await caches.match(request, { ignoreSearch: true });
        return cached || new Response("", { status: 503, statusText: "Offline" });
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
        const assetEntries = normalizeAssetEntries(manifest);
        const routeUrls = manifest.routes || [];

        const routes = [...new Set([...APP_ROUTES, ...routeUrls])];
        const cache = await caches.open(CORE_CACHE);
        const meta = await readOfflineMeta(cache);
        let completed = 0;
        let downloadedBytes = 0;
        const total = routes.length + assetEntries.length;
        const totalBytes = manifest.totalBytes || 0;

        // Download routes first so all app screens are available offline.
        const BATCH = 6;
        for (let i = 0; i < routes.length; i += BATCH) {
          const batch = routes.slice(i, i + BATCH);
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

        // Download or update only changed manifest assets.
        for (let i = 0; i < assetEntries.length; i += BATCH) {
          const batch = assetEntries.slice(i, i + BATCH);
          await Promise.all(batch.map(async (entry) => {
            try {
              const result = await cacheManifestAssetIfNeeded(cache, entry, meta);
              downloadedBytes += result.bytes;
            } catch {
              // One failed asset must not cancel the whole download
            }
            completed += 1;
            await notifyClients({ type: "OFFLINE_PROGRESS", completed, total, downloadedBytes, totalBytes });
          }));
        }

        await writeOfflineMeta(cache, meta);

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
        const assetEntries = normalizeAssetEntries(manifest);
        const routeUrls = manifest.routes || [];
        const cache = await caches.open(CORE_CACHE);
        const meta = await readOfflineMeta(cache);
        let cachedAssetBytes = 0;
        let missingAssets = 0;

        for (const url of routeUrls) {
          const response = await cache.match(url);
          if (!response) {
            missingAssets += 1;
          }
        }

        for (const entry of assetEntries) {
          const response = await cache.match(entry.url);
          const isCurrent = !entry.revision || meta.assets?.[entry.url] === entry.revision;
          if (!response || !isCurrent) {
            missingAssets += 1;
            continue;
          }
          cachedAssetBytes += entry.size || await responseBytes(response);
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
