import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Réduit la taille des chunks partagés (imports lucide non utilisés).
    optimizePackageImports: ["lucide-react"],
  },
  async headers() {
    return [
      {
        source: "/app.apk",
        headers: [
          {
            key: "Content-Type",
            value: "application/vnd.android.package-archive",
          },
          {
            key: "Content-Disposition",
            value: 'attachment; filename="soutien-scolaire.apk"',
          },
          {
            key: "Cache-Control",
            value: "public, max-age=300",
          },
        ],
      },
      // Service worker : pas de cache agressif, jamais de redirect auth.
      {
        source: "/sw.js",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
          {
            key: "Service-Worker-Allowed",
            value: "/",
          },
        ],
      },
      {
        source: "/manifest.webmanifest",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
      // Assets Next / médias curriculum : cache navigateur plus long
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
