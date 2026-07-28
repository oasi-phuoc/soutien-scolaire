import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LearnUp",
    short_name: "LearnUp",
    description: "LearnUp — Apprendre · Comprendre · Progresser",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#6fafa0",
    lang: "fr",
    icons: [
      {
        src: "/learnup-mark.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/learnup-mark-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/learnup-mark-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/learnup-mark-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
