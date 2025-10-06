<script lang="ts">
	import BigGreenButton from '$lib/components/BigGreenButton.svelte'
	import Stepper from '$lib/components/Stepper.svelte'

	let stepValue = $state(0)
	let m = $state({ x: 0, y: 0 })

	function handleMouseMove(event: MouseEvent) {
		m.x = event.clientX
		m.y = event.clientY
	}

	function honk() {
		alert('Honk!')
	}
</script>

<!-- Page Header -->
<div class="max-w-6xl mx-auto px-6 py-12">
	<div class="text-center mb-12">
		<div class="flex items-center justify-center gap-3 mb-4">
			<span class="text-6xl">🎯</span>
			<h1 class="text-5xl font-bold">Events in Svelte</h1>
		</div>
		<p class="text-surface-600-400 text-lg">Handle user interactions and DOM events</p>
	</div>

	<!-- Mouse Tracking Section -->
	<section class="mb-12">
		<div class="card preset-filled p-8">
			<div class="flex items-center gap-3 mb-6">
				<span class="text-4xl">🖱️</span>
				<h2 class="text-3xl font-bold">Pointer Events</h2>
			</div>
			<p class="text-surface-600-400 mb-6">Track mouse movement with the <code class="code">onpointermove</code> event:</p>
			
			<div 
				class="h-96 card preset-outlined flex items-center justify-center cursor-crosshair hover:preset-tonal transition-colors duration-300" 
				onpointermove={handleMouseMove}
			>
				<div class="text-center">
					<p class="text-surface-600-400 text-sm font-mono mb-2">POINTER COORDINATES</p>
					<p class="text-4xl font-bold text-primary-500 font-mono">
						{Math.round(m.x)} × {Math.round(m.y)}
					</p>
					<p class="text-surface-600-400 text-xs font-mono mt-2">Move your mouse over this area</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Event Bubbling Section -->
	<section class="mb-12">
		<div class="card preset-filled p-8">
			<div class="flex items-center gap-3 mb-6">
				<span class="text-4xl">⬆️</span>
				<h2 class="text-3xl font-bold">Event Bubbling</h2>
			</div>
			<p class="text-surface-600-400 mb-6">Events propagate up through parent elements. Click in the input or container to see bubbling:</p>
			
			<div 
				class="card preset-tonal p-8" 
				onkeydown={(e) => alert(`<div> detected: ${e.key}`)} 
				role="presentation"
			>
				<p class="mb-4 text-center">
					<span class="font-semibold">Parent Container:</span> Click here and press any key
				</p>
				<p class="text-surface-600-400 text-sm text-center mb-4">
					Events bubble from the input to this container
				</p>
				<input 
					class="input w-full" 
					placeholder="Type here to trigger input event first..."
					onkeydown={(e) => alert(`<input> detected: ${e.key}`)} 
				/>
			</div>
		</div>
	</section>

	<!-- Component Events Section -->
	<section class="mb-12">
		<div class="card preset-filled p-8">
			<div class="flex items-center gap-3 mb-6">
				<span class="text-4xl">🔧</span>
				<h2 class="text-3xl font-bold">Component Events</h2>
			</div>
			<p class="text-surface-600-400 mb-6">Pass event handlers to child components as props:</p>
			
			<div class="card preset-tonal p-8">
				<!-- Stepper Component -->
				<div class="mb-8">
					<div class="flex items-center gap-3 mb-4">
						<span class="text-2xl">📊</span>
						<h3 class="text-xl font-semibold">Stepper Component</h3>
					</div>
					<p class="text-surface-600-400 mb-4">Component with increment/decrement callbacks:</p>
					
					<div class="flex flex-col items-center gap-4 p-6">
						<div class="text-center">
							<p class="text-surface-600-400 text-sm font-mono mb-2">CURRENT VALUE</p>
							<p class="text-5xl font-bold text-primary-500 font-mono">{stepValue}</p>
						</div>
						<Stepper 
							twClass="m-2" 
							increment={() => (stepValue += 1)} 
							decrement={() => (stepValue -= 1)} 
						/>
					</div>
				</div>

				<!-- Button Event -->
				<div>
					<div class="flex items-center gap-3 mb-4">
						<span class="text-2xl">🔘</span>
						<h3 class="text-xl font-semibold">Custom Click Handler</h3>
					</div>
					<p class="text-surface-600-400 mb-4">Pass custom onclick handlers to components:</p>
					
					<div class="flex justify-center p-6">
						<BigGreenButton onclick={honk} />
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Key Concepts -->
	<section class="mb-12">
		<div class="card preset-filled p-8">
			<div class="flex items-center gap-3 mb-6">
				<span class="text-4xl">💡</span>
				<h2 class="text-3xl font-bold">Event Handling Concepts</h2>
			</div>
			
			<div class="grid md:grid-cols-2 gap-4">
				<div class="card preset-tonal p-5">
					<h4 class="font-semibold mb-2">🎪 Event Bubbling</h4>
					<p class="text-surface-600-400 text-sm">Events propagate from child to parent elements</p>
				</div>
				<div class="card preset-tonal p-5">
					<h4 class="font-semibold mb-2">📤 Event Forwarding</h4>
					<p class="text-surface-600-400 text-sm">Pass event handlers to child components</p>
				</div>
				<div class="card preset-tonal p-5">
					<h4 class="font-semibold mb-2">🎯 Inline Handlers</h4>
					<p class="text-surface-600-400 text-sm">Write event handlers directly in templates</p>
				</div>
				<div class="card preset-tonal p-5">
					<h4 class="font-semibold mb-2">⚡ DOM Events</h4>
					<p class="text-surface-600-400 text-sm">Access all standard browser events</p>
				</div>
			</div>
		</div>
	</section>
</div>