import type ObsidianSvelteTemplatePlugin from "../main";
import { ExampleModal } from "../ui/ExampleModal";

export function openExampleModal(plugin: ObsidianSvelteTemplatePlugin) {
	new ExampleModal(plugin.app, { greeting: plugin.settings.greeting }).open();
}

