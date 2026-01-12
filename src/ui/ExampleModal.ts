import { App, Modal } from "obsidian";
import { mount, unmount } from "svelte";
import ExampleModalComponent from "./ExampleModal.svelte";

type ExampleModalOptions = {
	greeting: string;
};

export class ExampleModal extends Modal {
	private component: ReturnType<typeof mount> | null = null;
	private options: ExampleModalOptions;

	constructor(app: App, options: ExampleModalOptions) {
		super(app);
		this.options = options;
	}

	onOpen() {
		this.contentEl.empty();
		this.contentEl.addClass("obsidian-svelte-template");

		this.component = mount(ExampleModalComponent, {
			target: this.contentEl,
			props: {
				greeting: this.options.greeting,
				onClose: () => this.close(),
			},
		});
	}

	onClose() {
		if (this.component) {
			void unmount(this.component);
			this.component = null;
		}
		this.contentEl.empty();
	}
}
