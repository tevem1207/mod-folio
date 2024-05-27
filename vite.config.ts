import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths"; // 추가

// https://vitejs.dev/config/
export default defineConfig({
  base: "/mod-folio",
  plugins: [react(), tsconfigPaths(), svgr()],
});
