import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [react(), eslint()],
  server: {
    host: true, // or use '0.0.0.0' to allow LAN access
    port: 5173, // optional: explicitly set port
  },
});
