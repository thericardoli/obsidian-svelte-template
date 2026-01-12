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
	class="w-[420px] max-w-full space-y-3 rounded-[var(--ost-radius)] bg-[color:var(--ost-modal-bg)] p-4"
>
	<div class="flex items-start justify-between gap-3">
		<div class="space-y-1">
			<h2 class="text-base font-semibold text-[color:var(--ost-text)]">
				Svelte 5 + Tailwind v4
			</h2>
			<p class="text-sm text-[color:var(--ost-muted)]">
				This modal is rendered by Svelte and styled with Tailwind.
			</p>
		</div>
		<button
			class="rounded-md px-2 py-1 text-sm text-[color:var(--ost-muted)] hover:bg-[color:var(--ost-hover)]"
			type="button"
			onclick={onClose}
		>
			Close
		</button>
	</div>

	<label class="block space-y-1">
		<span class="text-sm font-medium text-[color:var(--ost-text)]">Greeting</span>
		<input
			class="w-full rounded-md border border-[color:var(--ost-border)] bg-[color:var(--ost-surface-1)] px-3 py-2 text-sm text-[color:var(--ost-text)] focus:ring-2 focus:ring-[color:var(--ost-accent)] focus:outline-none"
			bind:value={name}
		/>
	</label>

	<div
		class="flex items-center justify-between gap-3 rounded-md border border-[color:var(--ost-border)] bg-[color:var(--ost-surface-2)] px-3 py-2"
	>
		<div class="text-sm">
			<div class="font-medium text-[color:var(--ost-text)]">Counter</div>
			<div class="text-[color:var(--ost-muted)]">Clicked {count} times</div>
		</div>
		<button
			class="rounded-md bg-[color:var(--ost-accent)] px-3 py-1.5 text-sm font-medium text-[color:var(--ost-on-accent)] hover:bg-[color:var(--ost-accent-hover)]"
			type="button"
			onclick={inc}
		>
			+1
		</button>
	</div>
</div>
