import { App, PluginSettingTab, Setting } from "obsidian";
import type ObsidianSvelteTemplatePlugin from "./main";

export interface PluginSettings {
	greeting: string;
}

export const DEFAULT_SETTINGS: PluginSettings = {
	greeting: "Hello from settings",
};

export class TemplateSettingTab extends PluginSettingTab {
	plugin: ObsidianSvelteTemplatePlugin;

	constructor(app: App, plugin: ObsidianSvelteTemplatePlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;
		containerEl.empty();

		new Setting(containerEl)
			.setName("Greeting")
			.setDesc("Shown in the svelte modal.")
			.addText((text) =>
				text.setValue(this.plugin.settings.greeting).onChange(async (value) => {
					this.plugin.settings.greeting = value;
					await this.plugin.saveSettings();
				}),
			);
	}
}
