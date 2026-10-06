// Cache hors ligne : le site fonctionne en classe sans réseau après une première visite.
const CACHE = "plcps-v1";
const SHELL = ["./", "index.html", "manifest.json", "data/competences.json",
  "icon-32.png", "icon-180.png", "icon-512.png",
  "fonts/atkinson-400.woff2", "fonts/atkinson-400-i.woff2", "fonts/atkinson-700.woff2", "fonts/lexend.woff2"];

self.addEventListener("install", e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await c.addAll(SHELL);
    // supports : récupérés à partir de la liste du programme, sans bloquer l'installation
    try {
      const txt = await (await fetch("data/competences.json")).text();
      const imgs = [...new Set(txt.match(/supports\/[\w.-]+\.(?:jpg|png|webp)/g) || [])];
      await Promise.allSettled(imgs.map(u => c.add(u)));
    } catch (_) {}
    self.skipWaiting();
  })());
});

self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== location.origin) return;
  const fresh = req.mode === "navigate" || url.pathname.endsWith(".json") || url.pathname.endsWith(".html");
  e.respondWith((async () => {
    const c = await caches.open(CACHE);
    if (fresh) { // contenu : réseau d'abord, copie en cache si hors ligne
      try { const r = await fetch(req); if (r.ok) c.put(req, r.clone()); return r; }
      catch (_) { return (await c.match(req, {ignoreSearch:true})) || (await c.match("index.html")) || Response.error(); }
    }
    const hit = await c.match(req);
    if (hit) return hit;
    const r = await fetch(req); if (r.ok) c.put(req, r.clone()); return r;
  })());
});
