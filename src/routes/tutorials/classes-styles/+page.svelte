<script lang="ts">
	let highlighted = false;
	let progress = 40;
	let mood = '😐';

	let temp = 72; // Fahrenheit
	let tempColor = '#60a5fa';

	function toggleHighlight() {
		highlighted = !highlighted;
	}

	function increaseProgress() {
		if (progress < 100) progress += 10;
	}

	function decreaseProgress() {
		if (progress > 0) progress -= 10;
	}

	function changeTemp(delta: number) {
		temp += delta;
		if (temp <= 50) tempColor = '#3b82f6'; // blue
		else if (temp < 80) tempColor = '#fbbf24'; // amber
		else tempColor = '#ef4444'; // red
	}

	$: mood = temp < 60 ? '🥶' : temp < 80 ? '😌' : '🥵';
</script>

<main class="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-slate-50">
	<div class="mx-auto max-w-5xl px-4 pb-20 pt-10">
		<!-- HEADER / MODULE CARD -->
		<section
			class="relative mb-10 overflow-hidden rounded-2xl border border-rose-500/40 bg-gradient-to-br from-rose-950/80 via-slate-950 to-black/90 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-sm"
		>
			<div class="pointer-events-none absolute -inset-8 -z-10 rounded-[32px] bg-rose-500/25 blur-3xl" />

			<div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
				<div>
					<div
						class="mb-2 inline-flex items-center gap-2 rounded-full border border-rose-500/40 bg-black/60 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-rose-300/80"
					>
						<span class="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
						<span>Module 06 · Classes & Styles</span>
					</div>

					<h1
						class="bg-gradient-to-r from-rose-300 via-slate-100 to-rose-400 bg-clip-text text-4xl font-black text-transparent md:text-5xl"
					>
						Classes & Styles in Svelte
					</h1>

					<p class="mt-3 max-w-xl text-sm text-rose-100/80 md:text-base">
						Use class and style bindings to change how elements look based on your component state —
						no manual DOM manipulation required.
					</p>
				</div>

				<div class="mt-2 text-xs font-mono text-rose-300/80 md:mt-0">
					<span class="text-rose-400">&gt;</span> focus: visual state that follows logic
				</div>
			</div>
		</section>

		<!-- GRID OF EXAMPLES -->
		<section class="grid gap-6 md:grid-cols-2">
			<!-- Example 1: class: directive for active highlight -->
			<div
				class="rounded-2xl border border-rose-600/30 bg-black/70 p-6 shadow-[0_14px_40px_rgba(0,0,0,0.75)]"
			>
				<header class="mb-4 flex items-center gap-3">
					<span class="text-3xl">✨</span>
					<div>
						<h2 class="text-lg font-semibold text-rose-100">Toggle classes with state</h2>
						<p class="mt-1 text-xs text-slate-300">
							Use the <span class="text-rose-300">class:</span> directive to conditionally apply
							classes when a boolean changes.
						</p>
					</div>
				</header>

				<p class="mb-3 text-sm text-slate-300">Click the card to toggle its highlighted state.</p>

				<div
					on:click={toggleHighlight}
					class="cursor-pointer rounded-xl border-2 border-slate-500/70 bg-black/60 px-8 py-4 text-center text-sm font-medium text-slate-100 transition-all duration-300"
					class:bg-yellow-300={highlighted}
					class:border-yellow-400={highlighted}
					class:scale-105={highlighted}
					class:shadow-[0_0_40px_rgba(250,204,21,0.4)]={highlighted}
				>
					{#if highlighted}
						<span class="text-black">✨ Highlighted!</span>
					{:else}
						<span class="text-slate-200">Click me to highlight</span>
					{/if}
				</div>
			</div>

			<!-- Example 2: style: directive for progress bar width -->
			<div
				class="rounded-2xl border border-rose-600/30 bg-black/70 p-6 shadow-[0_14px_40px_rgba(0,0,0,0.75)]"
			>
				<header class="mb-4 flex items-center gap-3">
					<span class="text-3xl">📊</span>
					<div>
						<h2 class="text-lg font-semibold text-rose-100">Dynamic styles with style:</h2>
						<p class="mt-1 text-xs text-slate-300">
							Bind inline styles directly to values for smooth, reactive visuals.
						</p>
					</div>
				</header>

				<p class="mb-3 text-sm text-slate-300">Adjust the progress bar using the buttons.</p>

				<div class="mb-4 w-full rounded-full bg-slate-800/80 p-1">
					<div class="h-4 rounded-full bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500">
						<div
							class="h-full rounded-full bg-gradient-to-r from-rose-400 via-rose-300 to-orange-300 transition-all duration-300"
							style:width={progress + '%'}
						/>
					</div>
				</div>

				<div class="mb-2 flex gap-2">
					<button
						class="rounded-lg border border-slate-600 bg-slate-900 px-3 py-1 text-xs font-mono text-slate-100 transition hover:border-rose-400 hover:bg-rose-950/40"
						on:click={decreaseProgress}
					>
						-10%
					</button>
					<button
						class="rounded-lg border border-slate-600 bg-slate-900 px-3 py-1 text-xs font-mono text-slate-100 transition hover:border-rose-400 hover:bg-rose-950/40"
						on:click={increaseProgress}
					>
						+10%
					</button>
				</div>

				<p class="text-sm font-mono text-slate-200">
					<span class="text-rose-300">&gt;</span> {progress}% complete
				</p>
			</div>

			<!-- Example 3: style: directive for temperature color -->
			<div
				class="md:col-span-2 rounded-2xl border border-rose-600/30 bg-black/70 p-6 shadow-[0_14px_40px_rgba(0,0,0,0.75)]"
			>
				<header class="mb-4 flex items-center gap-3">
					<span class="text-3xl">🌡️</span>
					<div>
						<h2 class="text-lg font-semibold text-rose-100">Visual state based on values</h2>
						<p class="mt-1 text-xs text-slate-300">
							Bind styles to a computed color, and let your UI react to data changes.
						</p>
					</div>
				</header>

				<p class="mb-4 text-sm text-slate-300">
					Change the temperature — the color and emoji update automatically based on the value.
				</p>

				<div class="flex flex-col items-center gap-4 md:flex-row md:justify-between">
					<div class="flex flex-col items-center gap-3">
						<div
							class="flex h-40 w-40 items-center justify-center rounded-full text-5xl shadow-lg transition-colors duration-300"
							style:background-color={tempColor}
						>
							{mood}
						</div>
						<p class="text-sm font-semibold text-slate-100">{temp}°F</p>
					</div>

					<div class="flex flex-col items-center gap-3 md:items-start">
						<div class="flex gap-2">
							<button
								class="rounded-lg border border-slate-600 bg-slate-900 px-3 py-1 text-xs font-mono text-slate-100 transition hover:border-sky-400 hover:bg-sky-950/40"
								on:click={() => changeTemp(-5)}
							>
								Cooler
							</button>
							<button
								class="rounded-lg border border-slate-600 bg-slate-900 px-3 py-1 text-xs font-mono text-slate-100 transition hover:border-orange-400 hover:bg-orange-950/40"
								on:click={() => changeTemp(5)}
							>
								Hotter
							</button>
						</div>

						<p class="text-xs text-slate-400">
							Below 50°F → blue, between 50–80°F → amber, above 80°F → red.
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- FOOTER SUMMARY -->
		<section
			class="mt-10 rounded-2xl border border-rose-600/40 bg-gradient-to-r from-slate-950 via-rose-950/40 to-slate-950 px-6 py-5 text-sm text-slate-300"
		>
			<div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
				<div>
					<p class="font-mono text-xs uppercase tracking-[0.18em] text-rose-300">
						Classes & styles takeaway
					</p>
					<p class="mt-1 text-slate-200">
						Instead of querying the DOM, let Svelte’s reactivity decide which classes and styles apply.
						Your UI becomes a pure function of your state.
					</p>
				</div>
				<div class="mt-2 text-xs text-rose-300/90 md:mt-0">
					<span class="text-rose-400">&gt;</span> Next module:
					<a
						href="/tutorials/motion"
						class="ml-1 underline decoration-rose-400/60 underline-offset-4 hover:decoration-rose-300"
					>
						Motion & animation
					</a>
				</div>
			</div>
		</section>
	</div>
</main>
