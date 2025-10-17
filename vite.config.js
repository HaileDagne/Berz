// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,
//     host: true,
//     strictPort: false,
//     cors: true,
//     headers: {
//       "Cache-Control": "no-cache, no-store, must-revalidate",
//       Pragma: "no-cache",
//       Expires: "0",
//     },
//     middlewareMode: false,
//     hmr: {
//       overlay: true,
//     },
//   },
//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks: undefined,
//       },
//     },
//   },
//   optimizeDeps: {
//     include: ["react", "react-dom", "react-router-dom"],
//     force: true,
//   },
//   esbuild: {
//     jsx: "automatic",
//   },
// });


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Abity/",
});