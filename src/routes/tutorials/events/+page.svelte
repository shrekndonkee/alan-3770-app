<script lang="ts">
	import BigGreenButton from '$lib/components/BigGreenButton.svelte';
	import Stepper from '$lib/components/Stepper.svelte';

	let stepValue = $state(0);
	let m = $state({ x: 0, y: 0 });

	function handleMouseMove(event: MouseEvent) {
		m.x = event.clientX;
		m.y = event.clientY;
	}

	function honk() {
		alert('Honk!');
	}
</script>

<main class="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-slate-50">
	<div class="mx-auto max-w-5xl px-4 pb-20 pt-10">
		<!-- HEADER / MODULE CARD -->
		<section
			class="relative mb-10 overflow-hidden rounded-2xl border border-amber-500/40 bg-gradient-to-br from-amber-950/80 via-slate-950 to-black/90 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-sm"
		>
			<div class="pointer-events-none absolute -inset-8 -z-10 rounded-[32px] bg-amber-500/20 blur-3xl" />

			<div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
				<div>
					<div
						class="mb-2 inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-black/60 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-amber-300/80"
					>
						<span class="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
						<span>Module 04 · Events</span>
					</div>

					<h1
						class="bg-gradient-to-r from-amber-300 via-slate-100 to-amber-400 bg-clip-text text-4xl font-black text-transparent md:text-5xl"
					>
						Events in Svelte
					</h1>

					<p class="mt-3 max-w-xl text-sm text-amber-100/80 md:text-base">
						Handle user interactions and browser events with a clean, declarative syntax using
						Svelte’s <span class="text-amber-300">on:</span> directives.
					</p>
				</div>

				<div class="mt-2 text-xs font-mono text-amber-300/80 md:mt-0">
					<span class="text-amber-400">&gt;</span> focus: interactions & event flow
				</div>
			</div>
		</section>

		<!-- GRID OF LAB CARDS -->
		<section class="grid gap-6 md:grid-cols-2">
			<!-- Card 1: Pointer Events -->
			<div
				class="rounded-2xl border border-amber-600/30 bg-black/70 p-5 shadow-[0_14px_40px_rgba(0,0,0,0.75)]"
			>
				<header class="mb-4 flex items-center gap-3">
					<span class="text-3xl">🖱️</span>
					<div>
						<h2 class="text-lg font-semibold text-amber-100">Pointer events</h2>
						<p class="mt-1 text-xs text-slate-300">
							Track mouse or pointer movement using <span class="text-amber-300">onpointermove</span>.
						</p>
					</div>
				</header>

				<p class="mb-4 text-sm text-slate-300">
					Move your cursor inside the panel. The coordinates update on every pointer event.
				</p>

				<div
					class="flex h-64 w-full items-center justify-center rounded-xl border border-amber-700/40 bg-gradient-to-br from-slate-950 via-amber-950/25 to-black text-sm text-amber-100 cursor-crosshair"
					onpointermove={handleMouseMove}
				>
					<div class="text-center">
						<p class="mb-2 text-xs font-mono text-slate-400">POINTER COORDINATES</p>
						<p class="font-mono text-4xl font-bold text-amber-400">
							{Math.round(m.x)} × {Math.round(m.y)}
						</p>
						<p class="mt-2 text-xs font-mono text-slate-400">Move your mouse over this area</p>
					</div>
				</div>
			</div>

			<!-- Card 2: Event Bubbling -->
			<div
				class="rounded-2xl border border-amber-600/30 bg-black/70 p-5 shadow-[0_14px_40px_rgba(0,0,0,0.75)]"
			>
				<header class="mb-4 flex items-center gap-3">
					<span class="text-3xl">⬆️</span>
					<div>
						<h2 class="text-lg font-semibold text-amber-100">Event bubbling</h2>
						<p class="mt-1 text-xs text-slate-300">
							Events start at the target and bubble up through parent elements.
						</p>
					</div>
				</header>

				<p class="mb-4 text-sm text-slate-300">
					Type in the input or press a key while focused on the container to see how events bubble.
				</p>

				<div
					class="rounded-xl border border-amber-700/40 bg-amber-950/20 p-6"
					onkeydown={(e) => alert(`<div> detected: ${e.key}`)}
					role="presentation"
				>
					<p class="mb-4 text-center text-sm text-slate-200">
						<span class="font-semibold">Parent container:</span> click here and press any key
					</p>
					<p class="mb-4 text-center text-xs text-slate-400">
						Events bubble from the input to this container
					</p>

					<input
						class="w-full rounded-lg border border-amber-700/50 bg-black/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-amber-400 focus:outline-none"
						placeholder="Type here to trigger <input> first, then the parent..."
						onkeydown={(e) => alert(`<input> detected: ${e.key}`)}
					/>
				</div>
			</div>

			<!-- Card 3: Component Events (Stepper + Button) -->
			<div
				class="md:col-span-2 rounded-2xl border border-amber-600/30 bg-black/70 p-5 shadow-[0_14px_40px_rgba(0,0,0,0.75)]"
			>
				<header class="mb-4 flex items-center gap-3">
					<span class="text-3xl">🔧</span>
					<div>
						<h2 class="text-lg font-semibold text-amber-100">Component events</h2>
						<p class="mt-1 text-xs text-slate-300">
							Pass handlers into child components as props and respond to their events from the parent.
						</p>
					</div>
				</header>

				<div class="grid gap-8 md:grid-cols-2">
					<!-- Stepper Component -->
					<div class="rounded-xl border border-amber-700/40 bg-amber-950/20 p-5">
						<div class="mb-4 flex items-center gap-3">
							<span class="text-2xl">📊</span>
							<h3 class="text-base font-semibold text-amber-100">Stepper component</h3>
						</div>
						<p class="mb-4 text-xs text-slate-300">
							The parent controls the value. The child calls <span class="text-amber-300">increment</span> and
							<span class="text-amber-300">decrement</span> callbacks passed in as props.
						</p>

						<div class="flex flex-col items-center gap-4 p-4">
							<div class="text-center">
								<p class="mb-2 text-xs font-mono text-slate-400">CURRENT VALUE</p>
								<p class="font-mono text-5xl font-bold text-amber-400">{stepValue}</p>
							</div>
							<Stepper
								twClass="m-2"
								increment={() => (stepValue += 1)}
								decrement={() => (stepValue -= 1)}
							/>
						</div>
					</div>

					<!-- BigGreenButton Event -->
					<div class="rounded-xl border border-amber-700/40 bg-amber-950/20 p-5">
						<div class="mb-4 flex items-center gap-3">
							<span class="text-2xl">🔘</span>
							<h3 class="text-base font-semibold text-amber-100">Custom click handler</h3>
						</div>
						<p class="mb-4 text-xs text-slate-300">
							You can pass any function into a component as an <span class="text-amber-300">onclick</span>{' '}
							handler. The child just calls it when the event happens.
						</p>

						<div class="flex justify-center p-4">
							<BigGreenButton onclick={honk} />
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- KEY CONCEPTS -->
		<section
			class="mt-10 rounded-2xl border border-amber-600/40 bg-gradient-to-r from-slate-950 via-amber-950/40 to-slate-950 px-6 py-5 text-sm text-slate-300"
		>
			<div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
				<div class="md:w-1/2">
					<p class="font-mono text-xs uppercase tracking-[0.18em] text-amber-300">
						Event handling concepts
					</p>
					<p class="mt-1 text-slate-200">
						Svelte’s event system lets you wire up complex interactions with simple handlers. You can listen to
						DOM events, pass callbacks into components, and rely on bubbling to keep your code organized.
					</p>
				</div>

				<div class="grid gap-3 md:w-1/2 md:grid-cols-2">
					<div class="rounded-xl border border-amber-700/40 bg-black/60 p-4">
						<h4 class="mb-1 text-sm font-semibold text-amber-100">Event bubbling</h4>
						<p class="text-xs text-slate-300">
							Events travel from child to parent. Use this to handle related events in one place.
						</p>
					</div>
					<div class="rounded-xl border border-amber-700/40 bg-black/60 p-4">
						<h4 class="mb-1 text-sm font-semibold text-amber-100">Event forwarding</h4>
						<p class="text-xs text-slate-300">
							Components can accept event handlers as props, letting the parent decide what happens.
						</p>
					</div>
					<div class="rounded-xl border border-amber-700/40 bg-black/60 p-4">
						<h4 class="mb-1 text-sm font-semibold text-amber-100">Inline handlers</h4>
						<p class="text-xs text-slate-300">
							Write small expressions directly in the template for simple interactions.
						</p>
					</div>
					<div class="rounded-xl border border-amber-700/40 bg-black/60 p-4">
						<h4 class="mb-1 text-sm font-semibold text-amber-100">DOM events</h4>
						<p class="text-xs text-slate-300">
							Use all standard browser events with the same <span class="text-amber-300">on:</span> syntax.
						</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</main>
