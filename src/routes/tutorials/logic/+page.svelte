<script lang="ts">
	import Counter from '$lib/components/Counter.svelte';
	import { counter } from '$lib/global/globalState.svelte';
	import { faker } from '@faker-js/faker';
	import { Switch } from '@skeletonlabs/skeleton-svelte';
	import { getRandomNumber } from '$lib/utils/delayFunction';
	import { ProgressRing } from '@skeletonlabs/skeleton-svelte';

	let visibleState = $state(false);
	let promise = getRandomNumber();

	const twentyFiveAvatars = [...Array(25)].map(() => {
		const fullName = faker.person.fullName();
		const avatarUrl = faker.image.avatar();
		return { fullName, avatarUrl };
	});
</script>

<main class="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-slate-50">
	<div class="mx-auto max-w-5xl px-4 pb-20 pt-10">
		<!-- HEADER / MODULE CARD -->
		<section
			class="relative mb-10 overflow-hidden rounded-2xl border border-lime-500/40 bg-gradient-to-br from-lime-950/80 via-slate-950 to-black/90 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-sm"
		>
			<div class="pointer-events-none absolute -inset-8 -z-10 rounded-[32px] bg-lime-500/20 blur-3xl" />

			<div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
				<div>
					<div
						class="mb-2 inline-flex items-center gap-2 rounded-full border border-lime-500/40 bg-black/60 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-lime-300/80"
					>
						<span class="h-1.5 w-1.5 rounded-full bg-lime-400 animate-pulse" />
						<span>Module 03 · Logic</span>
					</div>

					<h1
						class="bg-gradient-to-r from-lime-300 via-slate-100 to-lime-400 bg-clip-text text-4xl font-black text-transparent md:text-5xl"
					>
						Logic & Conditional Rendering
					</h1>

					<p class="mt-3 max-w-xl text-sm text-lime-100/80 md:text-base">
	Use <span class="text-lime-300">#if</span>,
	<span class="text-lime-300">:else</span>, and
	<span class="text-lime-300">#await</span>
	blocks to control what appears on screen based on state and async data.
</p>
				</div>

				<div class="mt-2 text-xs font-mono text-lime-300/80 md:mt-0">
					<span class="text-lime-400">&gt;</span> focus: show the right UI at the right time
				</div>
			</div>
		</section>

		<!-- GRID OF LAB CARDS -->
		<section class="grid gap-6 md:grid-cols-2">
			<!-- Card 1: Conditional based on global counter -->
			<div
				class="rounded-2xl border border-lime-600/30 bg-black/70 p-5 shadow-[0_14px_40px_rgba(0,0,0,0.75)]"
			>
				<header class="mb-4">
					<h2 class="text-lg font-semibold text-lime-100">Conditional rendering with {'#if'}</h2>
					<p class="mt-1 text-xs text-slate-300">
						Render extra UI only when a condition is met. Here, we check a global counter from your
						store.
					</p>
				</header>

				<div class="mx-auto mb-3 w-64">
					<Counter />
				</div>

				{#if counter.count > 10}
					<p class="font-mono text-sm text-lime-200">
						<span class="text-lime-400">&gt;</span> {counter.count} is greater than 10
					</p>
				{:else}
					<p class="font-mono text-sm text-slate-300">
						Increase the counter until it passes <span class="text-lime-300">10</span>.
					</p>
				{/if}
			</div>

			<!-- Card 2: Toggle avatars with Switch + if/else -->
			<div
				class="rounded-2xl border border-lime-600/30 bg-black/70 p-5 shadow-[0_14px_40px_rgba(0,0,0,0.75)]"
			>
				<header class="mb-4">
					<h2 class="text-lg font-semibold text-lime-100">Toggling UI with {'#if'} / {':else'}</h2>
					<p class="mt-1 text-xs text-slate-300">
						Use boolean state to show or hide entire sections of your UI.
					</p>
				</header>

				<div class="mb-3 flex items-center justify-center gap-3">
					<span class="text-xs font-mono uppercase tracking-[0.18em] text-lime-300">
						Avatars visible
					</span>
					<Switch
						name="avatarSwitch"
						checked={visibleState}
						onCheckedChange={(e) => (visibleState = !visibleState)}
					/>
				</div>

				{#if visibleState}
					<p class="mb-3 text-sm text-lime-200">Avatars are visible!</p>
					<div class="flex max-h-[280px] flex-wrap justify-center gap-4 overflow-y-auto pr-2">
						{#each twentyFiveAvatars as avatar}
							<div class="flex flex-col items-center gap-2">
								<img
									src={avatar.avatarUrl}
									alt={avatar.fullName}
									class="h-16 w-16 rounded-full border-2 border-lime-500 object-cover"
								/>
								<p class="text-xs font-medium text-slate-100">{avatar.fullName}</p>
							</div>
						{/each}
					</div>
				{:else}
					<p class="text-sm text-slate-300">Avatars are not visible.</p>
				{/if}
			</div>

			<!-- Card 3: Await block for async logic -->
			<div
				class="md:col-span-2 rounded-2xl border border-lime-600/30 bg-black/70 p-5 shadow-[0_14px_40px_rgba(0,0,0,0.75)]"
			>
				<header class="mb-4">
					<h2 class="text-lg font-semibold text-lime-100">{'#await'} blocks for async state</h2>
					<p class="mt-1 text-xs text-slate-300">
						Use <span class="font-mono">{'#await promise'}</span> to handle loading, success, and error
						states in a single expressive block.
					</p>
				</header>

				<div class="flex flex-col items-center gap-4 text-sm">
					{#await promise}
						<div class="flex flex-col items-center gap-2 text-lime-200">
							<ProgressRing
								value={null}
								size="size-14"
								meterStroke="stroke-lime-500"
								trackStroke="stroke-lime-900"
							/>
							<span class="font-mono text-xs text-slate-300">Loading random number…</span>
						</div>
					{:then number}
						<p class="font-mono text-lime-200">
							<span class="text-lime-400">&gt;</span> Random number:
							<span class="ml-1 text-lime-300">{number}</span>
						</p>
					{:catch error}
						<p class="font-mono text-sm text-red-300">
							<span class="text-red-400">&gt;</span> Error loading number: {error.message}
						</p>
					{/await}
				</div>
			</div>
		</section>

		<!-- FOOTER NAV / SUMMARY -->
		<section
			class="mt-10 rounded-2xl border border-lime-600/40 bg-gradient-to-r from-slate-950 via-lime-950/40 to-slate-950 px-6 py-5 text-sm text-slate-300"
		>
			<div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
				<div>
					<p class="font-mono text-xs uppercase tracking-[0.18em] text-lime-300">
						Logic takeaway
					</p>
					<p class="mt-1 text-slate-200">
						Use Svelte’s template logic to keep your UI honest:
						<span class="text-lime-300">render only what your state says is true</span>. If the data
						changes, the UI responds automatically.
					</p>
				</div>
				<div class="mt-2 text-xs text-lime-300/90 md:mt-0">
					<span class="text-lime-400">&gt;</span> Next module:
					<a
						href="/tutorials/events"
						class="ml-1 underline decoration-lime-400/60 underline-offset-4 hover:decoration-lime-300"
					>
						Events & interactions
					</a>
				</div>
			</div>
		</section>
	</div>
</main>
