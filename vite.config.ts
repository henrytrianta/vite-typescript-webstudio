import { resolve } from "node:path";
import type { UserConfig } from "vite";
import viteLivePreview from "vite-live-preview";

export default {
	root: "src",
	plugins: [viteLivePreview()],
	server: {
		port: 3000,
		cors: true,
	},
	preview: {
		port: 3000,
		cors: true,
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src/"),
		},
	},
	build: {
		outDir: "../dist",
		emptyOutDir: true,
		target: "es2015",
		rollupOptions: {
			input: {
				index: resolve(__dirname, "src/index.html"),
			},
			output: {
				format: "iife",
				entryFileNames: "index.js",
				name: "WstdJs",
			},
		},
	},
} satisfies UserConfig;
