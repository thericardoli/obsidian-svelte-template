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

<div class="w-[420px] max-w-full space-y-3 p-4">
	<div class="flex items-start justify-between gap-3">
		<div class="space-y-1">
			<h2 class="text-base font-semibold">Svelte 5 + Tailwind v4</h2>
			<p class="text-sm text-zinc-500">
				This modal is rendered by Svelte and styled with Tailwind.
			</p>
		</div>
		<button
			class="rounded-md px-2 py-1 text-sm text-zinc-600 hover:bg-zinc-100"
			type="button"
			onclick={onClose}
		>
			Close
		</button>
	</div>

	<label class="block space-y-1">
		<span class="text-sm font-medium">Greeting</span>
		<input
			class="w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
			bind:value={name}
		/>
	</label>

	<div
		class="flex items-center justify-between gap-3 rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2"
	>
		<div class="text-sm">
			<div class="font-medium">Counter</div>
			<div class="text-zinc-600">Clicked {count} times</div>
		</div>
		<button
			class="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-500"
			type="button"
			onclick={inc}
		>
			+1
		</button>
	</div>
</div>
