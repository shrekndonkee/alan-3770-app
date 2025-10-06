<script lang="ts">
    import { marked } from 'marked'
	import InsecureQuestion from '$lib/components/InsecureQuestion.svelte'

	let name = $state('world')
	let markdownToShow = $state(`Here is *italics* and **bold** \n\n - And a list item \n\n - Another list item`)

	let scoops = $state(1)
	let availableFlavors = $state(['Vanilla', 'Chocolate', 'Strawberry'])
    let flavors = $state([] as string[])
</script>

<!-- Page Header -->
<div class="max-w-6xl mx-auto px-6 py-12">
	<div class="text-center mb-12">
		<div class="flex items-center justify-center gap-3 mb-4">
			<span class="text-6xl">🔄</span>
			<h1 class="text-5xl font-bold">Bindings in Svelte</h1>
		</div>
		<p class="text-surface-600-400 text-lg">Two-way data binding mastery</p>
	</div>

	<!-- Text Input Binding Section -->
	<section class="mb-12">
		<div class="card preset-filled p-8">
			<div class="flex items-center gap-3 mb-6">
				<span class="text-4xl">✍️</span>
				<h2 class="text-3xl font-bold">Text Input Binding</h2>
			</div>
			<p class="text-surface-600-400 mb-6">Use <code class="code">bind:value</code> for two-way data binding with inputs:</p>
			
			<div class="card preset-tonal p-6">
				<div class="mb-6">
					<label class="label mb-2">Type your name:</label>
					<input 
						class="input w-full" 
						type="text" 
						bind:value={name} 
						placeholder="Enter text here..."
					/>
				</div>
				<div class="p-4">
					<p class="text-surface-600-400 text-sm mb-2">OUTPUT:</p>
					<h1 class="text-3xl font-bold text-primary-500">Hello {name}!</h1>
				</div>
			</div>
		</div>
	</section>

	<!-- Textarea & HTML Rendering Section -->
	<section class="mb-12">
		<div class="card preset-filled p-8">
			<div class="flex items-center gap-3 mb-6">
				<span class="text-4xl">📝</span>
				<h2 class="text-3xl font-bold">Textarea & Markdown</h2>
			</div>
			<p class="text-surface-600-400 mb-6">Bind textarea values and render HTML with <code class="code">@html</code>:</p>
			
			<div class="card preset-tonal p-6">
				<textarea 
					class="textarea w-full h-32 resize-y mb-6" 
					bind:value={markdownToShow}
					placeholder="Type markdown here..."
				></textarea>

				<div class="p-6 card preset-filled">
					<p class="text-surface-600-400 text-sm mb-3">RENDERED MARKDOWN:</p>
					<div class="prose prose-invert max-w-none">
						{@html marked(markdownToShow)}
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Number & Range Binding Section -->
	<section class="mb-12">
		<div class="card preset-filled p-8">
			<div class="flex items-center gap-3 mb-6">
				<span class="text-4xl">🔢</span>
				<h2 class="text-3xl font-bold">Number & Range Inputs</h2>
			</div>
			<p class="text-surface-600-400 mb-6">Bind numeric values and sync multiple inputs to the same state:</p>
			
			<div class="card preset-tonal p-8">
				<div class="flex flex-col md:flex-row items-center justify-center gap-6">
					<div>
						<label class="label mb-2">Number Input:</label>
						<input 
							type="number" 
							bind:value={scoops} 
							class="input w-32 text-center" 
							min="1" 
							max="3" 
						/>
					</div>
					<div class="flex-1 max-w-md">
						<label class="label mb-2">Range Slider:</label>
						<input
							type="range"
							bind:value={scoops}
							class="range w-full"
							min="1"
							max="3"
							step="1"
						/>
					</div>
					<div class="text-center card preset-filled px-6 py-4">
						<p class="text-surface-600-400 text-xs mb-1">SCOOPS</p>
						<p class="text-4xl font-bold text-primary-500">{scoops}</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- InsecureQuestion Component -->
	<section class="mb-12">
		<div class="card preset-filled p-8">
			<div class="flex items-center gap-3 mb-6">
				<span class="text-4xl">⚠️</span>
				<h2 class="text-3xl font-bold">Component Binding Example</h2>
			</div>
			<InsecureQuestion />
		</div>
	</section>

	<!-- Ice Cream Form Section -->
	<section class="mb-12">
		<div class="card preset-filled p-8">
			<div class="flex items-center gap-3 mb-8">
				<span class="text-4xl">🍦</span>
				<h2 class="text-3xl font-bold">Complete Form Example</h2>
			</div>
			<p class="text-surface-600-400 mb-6">Combine radio buttons, checkboxes, and select inputs with validation:</p>
			
			<div class="card preset-tonal p-8">
				<form>
					<!-- Radio Buttons -->
					<div class="mb-8">
						<h3 class="text-xl font-semibold mb-4">Number of Scoops</h3>
						<div class="flex gap-4">
							{#each [1, 2, 3] as scoopNum}
								<label class="flex items-center gap-2 card preset-outlined px-4 py-3 cursor-pointer hover:preset-tonal transition-colors duration-300">
									<input 
										class="radio" 
										type="radio" 
										value={scoopNum} 
										bind:group={scoops} 
									/>
									<span class="font-semibold">{scoopNum} Scoop{scoopNum > 1 ? 's' : ''}</span>
								</label>
							{/each}
						</div>
					</div>

					<!-- Checkboxes -->
					<div class="mb-8">
						<h3 class="text-xl font-semibold mb-4">Select Flavors</h3>
						<div class="grid md:grid-cols-3 gap-4 mb-4">
							{#each availableFlavors as flavor}
								<label class="flex items-center gap-3 card preset-outlined px-4 py-3 cursor-pointer hover:preset-tonal transition-colors duration-300">
									<input 
										class="checkbox" 
										type="checkbox" 
										value={flavor} 
										bind:group={flavors} 
									/>
									<span class="font-semibold">{flavor}</span>
								</label>
							{/each}
						</div>

						<!-- Validation Messages -->
						{#if flavors.length === 0}
							<div class="card preset-filled-error-500 p-4 flex items-center gap-3">
								<span class="text-2xl">❌</span>
								<p class="font-semibold">You must select at least one flavor!</p>
							</div>
						{:else if flavors.length > scoops}
							<div class="card preset-filled-warning-500 p-4 flex items-center gap-3">
								<span class="text-2xl">⚠️</span>
								<p class="font-semibold">You can only select {scoops} flavor{scoops > 1 ? 's' : ''}!</p>
							</div>
						{/if}
					</div>

					<!-- Select Multiple -->
					<div class="mb-8">
						<h3 class="text-xl font-semibold mb-4">Alternative: Multi-Select</h3>
						<select 
							class="select w-full" 
							multiple 
							bind:value={flavors}
							size="3"
						>
							{#each availableFlavors as flavor}
								<option value={flavor}>{flavor}</option>
							{/each}
						</select>
					</div>

					<!-- Order Summary -->
					<div class="card preset-filled-success-500 p-6">
						<h3 class="text-xl font-semibold mb-3">Your Order</h3>
						<p class="text-lg">
							<span class="font-bold">{scoops}</span> scoop{scoops > 1 ? 's' : ''} of 
							<span class="font-bold">{flavors.length > 0 ? flavors.join(', ') : 'nothing selected'}</span>
						</p>
					</div>
				</form>
			</div>
		</div>
	</section>

	<!-- Key Concepts -->
	<section class="mb-12">
		<div class="card preset-filled p-8">
			<div class="flex items-center gap-3 mb-6">
				<span class="text-4xl">💡</span>
				<h2 class="text-3xl font-bold">Binding Types</h2>
			</div>
			
			<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
				<div class="card preset-tonal p-5">
					<h4 class="font-semibold mb-2">bind:value</h4>
					<p class="text-surface-600-400 text-sm">Text inputs, numbers, textareas</p>
				</div>
				<div class="card preset-tonal p-5">
					<h4 class="font-semibold mb-2">bind:group</h4>
					<p class="text-surface-600-400 text-sm">Radio buttons and checkboxes</p>
				</div>
				<div class="card preset-tonal p-5">
					<h4 class="font-semibold mb-2">bind:checked</h4>
					<p class="text-surface-600-400 text-sm">Single checkbox state</p>
				</div>
				<div class="card preset-tonal p-5">
					<h4 class="font-semibold mb-2">Two-way sync</h4>
					<p class="text-surface-600-400 text-sm">Automatic state synchronization</p>
				</div>
			</div>
		</div>
	</section>
</div>