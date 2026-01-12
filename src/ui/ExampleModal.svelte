<script lang="ts">
	const { greeting, onClose } = $props<{ greeting: string; onClose: () => void }>();

	let initialized = false;
	let name = $state("");
	let count = $state(0);

	$effect(() => {
		if (initialized) return;
		name = greeting;
		initialized = true;
	});

	function inc() {
		count += 1;
	}
</script>

<div
	class="obsidian-svelte-template w-[420px] max-w-full space-y-3 rounded-[var(--ui-modal-radius)] bg-[color:var(--ui-modal-bg)] p-4"
>
	<div class="flex items-start justify-between gap-3">
		<div class="space-y-1">
			<h2 class="text-base font-semibold text-[color:var(--ui-text)]">
				Svelte 5 + Tailwind v4
			</h2>
			<p class="text-sm text-[color:var(--ui-muted)]">
				This modal is rendered by Svelte and styled with Tailwind.
			</p>
		</div>
		<button
			class="rounded-md px-2 py-1 text-sm text-[color:var(--ui-muted)] hover:bg-[color:var(--ui-hover)]"
			type="button"
			onclick={onClose}
		>
			Close
		</button>
	</div>

	<label class="block space-y-1">
		<span class="text-sm font-medium text-[color:var(--ui-text)]">Greeting</span>
		<input
			class="w-full rounded-md border border-[color:var(--ui-border)] bg-[color:var(--ui-form-bg)] px-3 py-2 text-sm text-[color:var(--ui-text)] focus:ring-2 focus:ring-[color:var(--ui-accent)] focus:outline-none"
			bind:value={name}
		/>
	</label>

	<div
		class="flex items-center justify-between gap-3 rounded-md border border-[color:var(--ui-border)] bg-[color:var(--ui-bg2)] px-3 py-2"
	>
		<div class="text-sm">
			<div class="font-medium text-[color:var(--ui-text)]">Counter</div>
			<div class="text-[color:var(--ui-muted)]">Clicked {count} times</div>
		</div>
		<button
			class="rounded-md bg-[color:var(--ui-accent)] px-3 py-1.5 text-sm font-medium text-[color:var(--ui-on-accent)] hover:bg-[color:var(--ui-accent-hover)]"
			type="button"
			onclick={inc}
		>
			+1
		</button>
	</div>
</div>
