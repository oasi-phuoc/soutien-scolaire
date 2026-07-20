const CACHE_VERSION = "learnup-offline-v10";
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

function routeMetaKey(url) {
  return `route:${url}`;
}

async function readOfflineMeta(cache) {
  const response = await cache.match(OFFLINE_META_URL);
  if (!response) return { assets: {}, manifestVersion: null, updatedAt: null };
  try {
    const meta = await response.json();
    return {
      assets: meta.assets || {},
      manifestVersion: meta.manifestVersion ?? null,
      updatedAt: meta.updatedAt ?? null,
    };
  } catch {
    return { assets: {}, manifestVersion: null, updatedAt: null };
  }
}

async function writeOfflineMeta(cache, meta) {
  await cache.put(
    OFFLINE_META_URL,
    new Response(JSON.stringify({
      assets: meta.assets || {},
      manifestVersion: meta.manifestVersion ?? null,
      updatedAt: meta.updatedAt ?? null,
    }), {
      headers: { "Content-Type": "application/json" },
    }),
  );
}

function finalizeOfflineMeta(meta, manifestVersion) {
  meta.manifestVersion = manifestVersion;
  meta.updatedAt = Date.now();
  return meta;
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

async function assetIsCurrent(cache, entry, meta) {
  const cached = await cache.match(entry.url);
  if (!cached) return false;

  const storedRevision = meta.assets?.[entry.url];
  if (!entry.revision || storedRevision !== entry.revision) return false;

  if (entry.size > 0) {
    const cachedSize = await responseBytes(cached);
    if (cachedSize !== entry.size) return false;
  }

  return true;
}

async function routeIsCurrent(cache, url, manifestVersion, meta) {
  const cached = await cache.match(url);
  if (!cached) return false;
  if (meta.manifestVersion !== manifestVersion) return false;
  return meta.assets?.[routeMetaKey(url)] === "ok";
}

async function analyzeOfflinePlan(cache, manifest, onCheckProgress) {
  const meta = await readOfflineMeta(cache);
  const assetEntries = normalizeAssetEntries(manifest);
  const routeUrls = manifest.routes || [];
  const routes = [...new Set([...APP_ROUTES, ...routeUrls])];
  const manifestVersion = manifest.version || 0;
  const totalItems = routes.length + assetEntries.length;

  const routesToUpdate = [];
  const assetsToUpdate = [];
  let pendingBytes = 0;
  let skippedCount = 0;
  let checked = 0;

  async function tickCheck() {
    checked += 1;
    if (!onCheckProgress) return;
    // Emit regularly so the UI bar advances during verification.
    if (checked === totalItems || checked === 1 || checked % 25 === 0) {
      await onCheckProgress({
        checked,
        total: totalItems,
        percent: totalItems > 0 ? Math.min(100, Math.round((checked / totalItems) * 100)) : 0,
      });
    }
  }

  for (const url of routes) {
    if (await routeIsCurrent(cache, url, manifestVersion, meta)) {
      skippedCount += 1;
    } else {
      routesToUpdate.push(url);
    }
    await tickCheck();
  }

  for (const entry of assetEntries) {
    if (await assetIsCurrent(cache, entry, meta)) {
      skippedCount += 1;
    } else {
      assetsToUpdate.push(entry);
      pendingBytes += entry.size || 0;
    }
    await tickCheck();
  }

  return {
    meta,
    manifestVersion,
    routesToUpdate,
    assetsToUpdate,
    pendingBytes,
    skippedCount,
    totalWork: routesToUpdate.length + assetsToUpdate.length,
    totalItems,
    expectedBytes: manifest.totalBytes || 0,
  };
}

/** Download a batch in parallel, then apply counters + notify once (monotonic). */
async function downloadBatch(items, runOne, state, notifyProgress) {
  const results = await Promise.all(items.map(async (item) => {
    try {
      return await runOne(item);
    } catch {
      return 0;
    }
  }));

  for (const bytes of results) {
    state.completed += 1;
    state.downloadedBytes += bytes;
  }

  const percent = state.total > 0
    ? Math.min(100, Math.round((state.completed / state.total) * 100))
    : 0;

  await notifyProgress({
    type: "OFFLINE_PROGRESS",
    phase: "downloading",
    completed: state.completed,
    total: state.total,
    downloadedBytes: state.downloadedBytes,
    pendingBytes: state.pendingBytes,
    skippedCount: state.skippedCount,
    percent,
  });
}

async function cacheManifestAsset(cache, entry, meta) {
  const response = await fetch(entry.url, { credentials: "include", cache: "reload" });
  if (!canStore(response)) return 0;

  const bytes = await responseBytes(response);
  await cache.put(entry.url, response.clone());
  meta.assets[entry.url] = entry.revision || `${bytes}`;
  return bytes;
}

async function cacheRoute(cache, url, manifestVersion, meta) {
  const bytes = await cacheUrlWithLinkedAssets(cache, url);
  meta.assets[routeMetaKey(url)] = "ok";
  meta.manifestVersion = manifestVersion;
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
  const isCoAudio = url.pathname.startsWith("/assets/expression/co/") && /\.(?:mp3|wav|ogg|m4a|aac)$/i.test(url.pathname);
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

async function buildUpdatePlan() {
  const manifestRes = await fetch("/offline-manifest.json", { cache: "no-store" });
  const manifest = manifestRes.ok ? await manifestRes.json() : { assets: [] };
  const cache = await caches.open(CORE_CACHE);
  const plan = await analyzeOfflinePlan(cache, manifest);
  return { manifest, plan };
}

self.addEventListener("message", (event) => {
  if (event.data?.type === "PREPARE_OFFLINE") {
    event.waitUntil((async () => {
      try {
        await notifyClients({ type: "OFFLINE_CHECK_START" });

        const manifestRes = await fetch("/offline-manifest.json", { cache: "no-store" });
        const manifest = manifestRes.ok ? await manifestRes.json() : { assets: [] };
        const cache = await caches.open(CORE_CACHE);

        const plan = await analyzeOfflinePlan(cache, manifest, async (check) => {
          await notifyClients({
            type: "OFFLINE_CHECK_PROGRESS",
            checked: check.checked,
            total: check.total,
            percent: check.percent,
          });
        });

        const {
          meta,
          manifestVersion,
          routesToUpdate,
          assetsToUpdate,
          pendingBytes,
          skippedCount,
          totalWork,
          totalItems,
          expectedBytes,
        } = plan;

        await notifyClients({
          type: "OFFLINE_CHECK_DONE",
          pendingCount: totalWork,
          pendingBytes,
          skippedCount,
          totalItems,
          expectedBytes,
          routesCount: routesToUpdate.length,
          assetsCount: assetsToUpdate.length,
        });

        if (totalWork === 0) {
          finalizeOfflineMeta(meta, manifestVersion);
          await writeOfflineMeta(cache, meta);
          await notifyClients({
            type: "OFFLINE_READY",
            downloadedBytes: 0,
            totalBytes: expectedBytes,
            skippedCount,
            upToDate: true,
            manifestVersion,
            updatedAt: meta.updatedAt,
          });
          return;
        }

        const state = {
          completed: 0,
          downloadedBytes: 0,
          total: totalWork,
          pendingBytes,
          skippedCount,
        };
        const BATCH = 6;

        const notifyProgress = (message) => notifyClients(message);

        for (let i = 0; i < routesToUpdate.length; i += BATCH) {
          const batch = routesToUpdate.slice(i, i + BATCH);
          await downloadBatch(
            batch,
            (url) => cacheRoute(cache, url, manifestVersion, meta),
            state,
            notifyProgress,
          );
        }

        for (let i = 0; i < assetsToUpdate.length; i += BATCH) {
          const batch = assetsToUpdate.slice(i, i + BATCH);
          await downloadBatch(
            batch,
            (entry) => cacheManifestAsset(cache, entry, meta),
            state,
            notifyProgress,
          );
        }

        finalizeOfflineMeta(meta, manifestVersion);
        await writeOfflineMeta(cache, meta);

        await notifyClients({
          type: "OFFLINE_READY",
          downloadedBytes: state.downloadedBytes,
          totalBytes: expectedBytes,
          skippedCount,
          upToDate: false,
          manifestVersion,
          updatedAt: meta.updatedAt,
        });
      } catch {
        await notifyClients({ type: "OFFLINE_ERROR" });
      }
    })());
  }

  if (event.data?.type === "GET_OFFLINE_UPDATE_PLAN") {
    event.waitUntil((async () => {
      try {
        const { manifest, plan } = await buildUpdatePlan();
        await notifyClients({
          type: "OFFLINE_UPDATE_PLAN",
          pendingCount: plan.totalWork,
          pendingBytes: plan.pendingBytes,
          skippedCount: plan.skippedCount,
          totalItems: plan.totalItems,
          expectedBytes: plan.expectedBytes,
          hasCache: plan.skippedCount > 0,
          manifestVersion: plan.manifestVersion,
          updatedAt: plan.meta.updatedAt ?? null,
        });
      } catch {
        await notifyClients({
          type: "OFFLINE_UPDATE_PLAN",
          pendingCount: 0,
          pendingBytes: 0,
          skippedCount: 0,
          totalItems: 0,
          expectedBytes: 0,
          hasCache: false,
        });
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
        const res = await fetch("/offline-manifest.json", { cache: "no-store" });
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
        const { manifest, plan } = await buildUpdatePlan();
        const cache = await caches.open(CORE_CACHE);
        const assetEntries = normalizeAssetEntries(manifest);
        let cachedAssetBytes = 0;

        for (const entry of assetEntries) {
          const response = await cache.match(entry.url);
          if (!response) continue;
          if (await assetIsCurrent(cache, entry, plan.meta)) {
            cachedAssetBytes += entry.size || await responseBytes(response);
          }
        }

        await notifyClients({
          type: "CACHE_STATUS",
          cachedAssetBytes,
          expectedBytes: plan.expectedBytes,
          missingAssets: plan.totalWork,
          skippedCount: plan.skippedCount,
          manifestVersion: plan.manifestVersion,
          updatedAt: plan.meta.updatedAt ?? null,
        });
      } catch {
        await notifyClients({
          type: "CACHE_STATUS",
          cachedAssetBytes: 0,
          expectedBytes: 0,
          missingAssets: 1,
          skippedCount: 0,
        });
      }
    })());
  }
});
