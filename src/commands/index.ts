import type ObsidianSvelteTemplatePlugin from "../main";
import { openExampleModal } from "./open-example-modal";

export function registerCommands(plugin: ObsidianSvelteTemplatePlugin) {
	plugin.addCommand({
		id: "open-svelte5-tailwind4-modal",
		name: "Open svelte 5 + tailwind modal",
		callback: () => openExampleModal(plugin),
	});
}
