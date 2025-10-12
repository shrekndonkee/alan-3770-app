<script lang="ts">
	let highlighted = false;
	let progress = 40;
	let mood = "😐";

	let temp = 72; // Fahrenheit
	let tempColor = "#60a5fa";

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
		if (temp <= 50) tempColor = "#3b82f6"; // blue
		else if (temp < 80) tempColor = "#fbbf24"; // amber
		else tempColor = "#ef4444"; // red
	}

	$: mood = temp < 60 ? "🥶" : temp < 80 ? "😌" : "🥵";
</script>

<div class="flex flex-col gap-10 items-center justify-center py-10">

	<h2 class="text-3xl font-bold">Svelte Class & Style Examples</h2>

	<!-- Example 1: class: directive for active highlight -->
	<div class="flex flex-col items-center gap-3">
		<p class="text-sm text-gray-600">Click to toggle highlight</p>
		<div
			on:click={toggleHighlight}
			class="cursor-pointer border-2 border-gray-400 rounded-lg px-8 py-4 transition-all duration-300"
			class:bg-yellow-300={highlighted}
			class:scale-110={highlighted}>
			{highlighted ? "✨ Highlighted!" : "Click me to highlight"}
		</div>
	</div>

	<!-- Example 2: style: directive for progress bar width -->
	<div class="flex flex-col items-center gap-3 w-72">
		<p class="text-sm text-gray-600">Adjust the progress bar</p>
		<div class="w-full bg-gray-200 h-6 rounded-full overflow-hidden">
			<div
				class="h-full bg-green-500 transition-all duration-300"
				style:width={progress + "%"}>
			</div>
		</div>
		<div class="flex gap-2">
			<button class="bg-blue-500 text-white px-3 py-1 rounded" on:click={decreaseProgress}>-10%</button>
			<button class="bg-blue-500 text-white px-3 py-1 rounded" on:click={increaseProgress}>+10%</button>
		</div>
		<p class="text-sm font-semibold">{progress}% complete</p>
	</div>

	<!-- Example 3: style: directive for temperature color -->
	<div class="flex flex-col items-center gap-3">
		<p class="text-sm text-gray-600">Change the temperature</p>
		<div
			class="w-40 h-40 rounded-full flex items-center justify-center text-5xl font-bold text-white shadow-lg transition-colors duration-300"
			style:background-color={tempColor}>
			{mood}
		</div>
		<p class="font-semibold">{temp}°F</p>
		<div class="flex gap-2">
			<button class="bg-gray-400 text-white px-3 py-1 rounded" on:click={() => changeTemp(-5)}>Cooler</button>
			<button class="bg-orange-500 text-white px-3 py-1 rounded" on:click={() => changeTemp(5)}>Hotter</button>
		</div>
	</div>
</div>
