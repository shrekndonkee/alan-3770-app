<script lang="ts">
	import { onMount } from 'svelte';
	
	let mounted = false;
	let particles: Array<{id: number, x: number, y: number, speed: number}> = [];
	
	onMount(() => {
		mounted = true;
		for (let i = 0; i < 50; i++) {
			particles.push({
				id: i,
				x: Math.random() * 100,
				y: Math.random() * 100,
				speed: Math.random() * 2 + 0.5
			});
		}
	});

	const tutorialSections = [
		{
			title: "Reactivity",
			description: "Master Svelte's reactive magic",
			icon: "⚡",
			href: "/tutorials/reactivity",
			color: "from-green-700 to-green-500"
		},
		{
			title: "Props",
			description: "Component communication patterns",
			icon: "🔗",
			href: "/tutorials/props", 
			color: "from-gray-600 to-green-700"
		},
		{
			title: "Logic",
			description: "Conditional rendering & loops",
			icon: "🧠",
			href: "/tutorials/logic",
			color: "from-green-600 to-emerald-600"
		},

		{
			title: "Events",
			description: "Components send and respond to actions",
			icon: "🔔",
			href: "/tutorials/events",
			color: "from-green-600 to-emerald-600"
		},

		{
			title: "Bindings",
			description: "Connect values between your code",
			icon: "🔗",
			href: "/tutorials/bindings",
			color: "from-green-600 to-emerald-600"
		}

	];
</script>

<div class="min-h-screen bg-black relative overflow-hidden">
	
	<!-- Animated Grid Background -->
	<div class="absolute inset-0 opacity-20">
		<div class="grid grid-cols-12 grid-rows-12 h-full w-full">
			{#each Array(144) as _, i}
				<div class="border border-green-700/20 animate-pulse" style="animation-delay: {(i * 50)}ms;"></div>
			{/each}
		</div>
	</div>

	<!-- Floating Particles -->
	<div class="absolute inset-0 overflow-hidden">
		{#each particles as particle}
			<div 
				class="absolute w-1 h-1 bg-green-500 rounded-full animate-ping opacity-60"
				style="left: {particle.x}%; top: {particle.y}%; animation-delay: {particle.id * 100}ms;"
			></div>
		{/each}
	</div>

	<!-- Hero Section -->
	<section class="relative z-10 min-h-screen flex items-center justify-center">
		<!-- Background Overlay -->
		<div class="absolute inset-0 bg-gradient-to-br from-black/90 via-gray-900/85 to-gray-800/90"></div>
		<div 
			class="absolute inset-0 bg-cover bg-center opacity-15"
			style="background-image: url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop&crop=center');"
		></div>

		<div class="relative z-20 max-w-7xl mx-auto px-6 py-20">
			
			<!-- Main Header -->
			<div class="text-center mb-16">
				<div class="inline-block p-4 border border-green-600/50 rounded-lg mb-8 bg-black/50 backdrop-blur-sm">
					<div class="flex items-center justify-center space-x-2 text-green-400 text-sm font-mono mb-2">
						<span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
						<span>SYSTEM ONLINE</span>
						<span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
					</div>
					
					<h1 class="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-gray-400 to-green-600 mb-4">
						Alan Dev
					</h1>
					
					<div class="text-2xl md:text-3xl text-gray-300 font-mono">
						<span class="text-green-400">&gt;</span> 
						Advanced Svelte Training Protocol
						<span class="animate-pulse text-green-400">_</span>
					</div>
				</div>

				<p class="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
					Access comprehensive Svelte development training modules. 
					Enhance your skills through interactive tutorials and hands-on coding experiences.
				</p>
			</div>

			<!-- Access Button -->
			<div class="text-center mb-16">
				<a href="/tutorials" class="group relative inline-block">
					<div class="absolute -inset-2 bg-gradient-to-r from-green-600 via-gray-600 to-green-700 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
					<div class="relative bg-black border-2 border-green-600/50 rounded-2xl p-8 hover:border-green-400 transition-all duration-300 backdrop-blur-sm">
						<div class="text-6xl mb-4">🚀</div>
						<div class="text-3xl font-bold text-white mb-2">ACCESS TUTORIALS</div>
						<div class="text-green-400 font-mono">ENTER TRAINING PROTOCOL</div>
						
						<div class="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
					</div>
				</a>
			</div>

			<!-- Tutorial Cards -->
			<div class="grid md:grid-cols-3 gap-8">
				{#each tutorialSections as section}
					<a href={section.href} class="group relative block">
						<div class="absolute -inset-1 bg-gradient-to-r {section.color} rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
						<div class="relative bg-black/90 border border-gray-700 rounded-xl p-6 hover:border-green-600 transition-all duration-300 backdrop-blur-sm">
							
							<div class="flex items-center justify-between mb-4">
								<div class="text-3xl">{section.icon}</div>
								<div class="text-xs text-green-400 font-mono bg-green-400/10 px-2 py-1 rounded">
									AVAILABLE
								</div>
							</div>
							
							<h3 class="text-xl font-bold text-white mb-2">{section.title}</h3>
							<p class="text-gray-400 text-sm mb-4">{section.description}</p>
							
							<div class="w-full bg-gray-700 rounded-full h-2 mb-3">
								<div class="bg-gradient-to-r {section.color} h-2 rounded-full w-0 group-hover:w-full transition-all duration-1000"></div>
							</div>
							
							<div class="text-green-400 font-mono text-sm">
								&gt; INITIALIZE MODULE_
							</div>
						</div>
					</a>
				{/each}
			</div>

			<!-- Stats -->
			<div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
				<div class="text-center p-4 border border-gray-700 rounded-lg bg-black/50 backdrop-blur-sm">
					<div class="text-2xl font-bold text-green-400">03</div>
					<div class="text-sm text-gray-400 font-mono">MODULES</div>
				</div>
				<div class="text-center p-4 border border-gray-700 rounded-lg bg-black/50 backdrop-blur-sm">
					<div class="text-2xl font-bold text-gray-400">∞</div>
					<div class="text-sm text-gray-400 font-mono">POSSIBILITIES</div>
				</div>
				<div class="text-center p-4 border border-gray-700 rounded-lg bg-black/50 backdrop-blur-sm">
					<div class="text-2xl font-bold text-green-400">100%</div>
					<div class="text-sm text-gray-400 font-mono">REACTIVE</div>
				</div>
				<div class="text-center p-4 border border-gray-700 rounded-lg bg-black/50 backdrop-blur-sm">
					<div class="text-2xl font-bold text-gray-300">⚡</div>
					<div class="text-sm text-gray-400 font-mono">FAST</div>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	@keyframes pulse {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.5; }
	}
	@keyframes ping {
		75%, 100% {
			transform: scale(2);
			opacity: 0;
		}
	}
	.group:hover .group-hover\:w-full { width: 100%; }
</style>
