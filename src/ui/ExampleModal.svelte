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
	class="w-[420px] max-w-full space-y-3 rounded-[var(--modal-radius,12px)] bg-[color:var(--modal-background,var(--background-primary))] p-4"
>
	<div class="flex items-start justify-between gap-3">
		<div class="space-y-1">
			<h2 class="text-base font-semibold text-[color:var(--text-normal)]">
				Svelte 5 + Tailwind v4
			</h2>
			<p class="text-sm text-[color:var(--text-muted)]">
				This modal is rendered by Svelte and styled with Tailwind.
			</p>
		</div>
		<button
			class="rounded-md px-2 py-1 text-sm text-[color:var(--text-muted)] hover:bg-[color:var(--background-modifier-hover)]"
			type="button"
			onclick={onClose}
		>
			Close
		</button>
	</div>

	<label class="block space-y-1">
		<span class="text-sm font-medium text-[color:var(--text-normal)]">Greeting</span>
		<input
			class="w-full rounded-md border border-[color:var(--background-modifier-border)] bg-[color:var(--background-primary)] px-3 py-2 text-sm text-[color:var(--text-normal)] focus:ring-2 focus:ring-[color:var(--interactive-accent)] focus:outline-none"
			bind:value={name}
		/>
	</label>

	<div
		class="flex items-center justify-between gap-3 rounded-md border border-[color:var(--background-modifier-border)] bg-[color:var(--background-secondary)] px-3 py-2"
	>
		<div class="text-sm">
			<div class="font-medium text-[color:var(--text-normal)]">Counter</div>
			<div class="text-[color:var(--text-muted)]">Clicked {count} times</div>
		</div>
		<button
			class="rounded-md bg-[color:var(--interactive-accent)] px-3 py-1.5 text-sm font-medium text-[color:var(--text-on-accent)] hover:bg-[color:var(--interactive-accent-hover,var(--interactive-accent))]"
			type="button"
			onclick={inc}
		>
			+1
		</button>
	</div>
</div>
