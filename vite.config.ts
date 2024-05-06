import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@common": path.resolve(__dirname, "./src/common"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@routers": path.resolve(__dirname, "./src/routers"),
      "@schemas": path.resolve(__dirname, "./src/schemas"),
      "@interfaces": path.resolve(__dirname, "./src/interfaces"),
    },
  },
  plugins: [react()],
});
