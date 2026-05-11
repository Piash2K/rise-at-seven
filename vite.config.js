import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom")) {
              return "react";
            }
            if (id.includes("gsap")) {
              return "animation";
            }
            if (id.includes("swiper")) {
              return "slider";
            }
            if (id.includes("react-fast-marquee")) {
              return "marquee";
            }
            return "vendor";
          }
        },
      },
    },
  },
})
