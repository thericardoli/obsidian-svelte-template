import { Plugin } from "obsidian";
import { DEFAULT_SETTINGS, type PluginSettings, TemplateSettingTab } from "./settings";
import { registerCommands } from "./commands";

import "./styles.css";

export default class ObsidianSvelteTemplatePlugin extends Plugin {
	settings: PluginSettings;

	async onload() {
		await this.loadSettings();

		registerCommands(this);
		this.addSettingTab(new TemplateSettingTab(this.app, this));
	}

	onunload() {}

	async loadSettings() {
		this.settings = Object.assign(
			{},
			DEFAULT_SETTINGS,
			(await this.loadData()) as Partial<PluginSettings>,
		);
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
