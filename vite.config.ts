import { dockRushScannerPlugin } from "@da_b1rmuda/dock-rush/plugin";
import { createPathRush } from "@da_b1rmuda/path-rush";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		dockRushScannerPlugin(),
		createPathRush({
			pagesDir: "src/pages",
			pagesImportBase: "/src/pages",
		}),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
