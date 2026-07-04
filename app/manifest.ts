import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tata's Tarot",
    short_name: "Tarot",
    description: "A birthday surprise for my Tata ❤️",

    start_url: "/",
    display: "standalone",

    background_color: "#020617",
    theme_color: "#020617",

    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}