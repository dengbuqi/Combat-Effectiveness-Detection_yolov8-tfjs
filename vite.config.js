import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2000, // handle warning on vendor.js bundle size
  },
  base: "/Combat-Effectiveness-Detection_yolov8-tfjs/", ///Combat-Effectiveness-Detection_yolov8-tfjs/
});
