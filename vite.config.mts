import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import { promises as fs } from "node:fs";
import { builtinModules } from "node:module";
import path from "node:path";

const OBSIDIAN_EXTERNAL = [
	"obsidian",
	"electron",
	"@codemirror/autocomplete",
	"@codemirror/collab",
	"@codemirror/commands",
	"@codemirror/language",
	"@codemirror/lint",
	"@codemirror/search",
	"@codemirror/state",
	"@codemirror/view",
	"@lezer/common",
	"@lezer/highlight",
	"@lezer/lr",
];

const NODE_EXTERNAL = [...builtinModules, ...builtinModules.map((m) => `node:${m}`)];

export default defineConfig(({ mode }) => {
	const prod = mode === "production";
	const outDir = "dist";

	return {
		plugins: [
			svelte(),
			tailwindcss(),
			{
				name: "obsidian-release-artifacts",
				apply: "build",
				async closeBundle() {
					const fromMain = path.join(outDir, "main.js");
					const fromCss = path.join(outDir, "styles.css");
					await fs.copyFile(fromMain, "main.js");
					await fs.copyFile(fromCss, "styles.css");
				},
			},
		],
		build: {
			target: "es2022",
			outDir,
			emptyOutDir: true,
			minify: prod ? "esbuild" : false,
			sourcemap: prod ? false : "inline",
			cssCodeSplit: false,
			lib: {
				entry: "src/main.ts",
				formats: ["cjs"],
				fileName: () => "main.js",
			},
			rollupOptions: {
				external: [...OBSIDIAN_EXTERNAL, ...NODE_EXTERNAL],
				output: {
					format: "cjs",
					entryFileNames: "main.js",
					inlineDynamicImports: true,
					assetFileNames: (assetInfo) => {
						const names = assetInfo.names ?? [];
						if (names.some((n) => n.endsWith(".css"))) return "styles.css";
						return "assets/[name][extname]";
					},
				},
			},
		},
	};
});
