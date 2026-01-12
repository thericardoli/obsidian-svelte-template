import tseslint from "typescript-eslint";
import obsidianmd from "eslint-plugin-obsidianmd";
import globals from "globals";
import { globalIgnores } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";
import path from "node:path";
import { fileURLToPath } from "node:url";

const tsconfigRootDir = path.dirname(fileURLToPath(import.meta.url));

const obsidianRecommended = obsidianmd.configs?.recommended as unknown;
const obsidianRecommendedConfigs =
	obsidianRecommended &&
	typeof (obsidianRecommended as { [Symbol.iterator]?: unknown })[Symbol.iterator] === "function"
		? Array.from(obsidianRecommended as Iterable<unknown>)
		: [];

export default tseslint.config(
	{
		languageOptions: {
			globals: {
				...globals.browser,
			},
			parserOptions: {
				project: ["./tsconfig.eslint.json"],
				tsconfigRootDir,
				extraFileExtensions: [".json"],
			},
		},
	},
	...obsidianRecommendedConfigs,
	eslintConfigPrettier,
	globalIgnores([
		"node_modules",
		"dist",
		"src/**/*.svelte",
		"esbuild.config.mjs",
		"eslint.config.mts",
		"version-bump.mjs",
		"versions.json",
		"main.js",
	]),
);
