<script lang="ts">
	import { onMount } from 'svelte';
	import { authState } from '$lib/global/globalState.svelte';
	
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
		},

		{
			title: "Classes & Styles",
			description: "Change an element’s appearance by binding CSS classes or inline styles to reactive state variables.",
			icon: "🎨",
			href: "/tutorials/classes-styles",
			color: "from-green-600 to-emerald-600"
		},
		{
	title: "Motion",
	description: "Animate elements using transitions, springs, and tweened stores to bring your UI to life.",
	icon: "🎞️",
	href: "/tutorials/motion",
	color: "from-blue-600 to-indigo-600"
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


{#if authState.isAuthenticated}
<div class="mb-16 text-center">
	<a href="/tutorial" class="group relative inline-block">

		<!-- Green glow background -->
		<div
			class="absolute -inset-2 rounded-2xl bg-gradient-to-r from-green-500 via-green-400 to-green-300 opacity-60 blur-lg transition-opacity duration-500 group-hover:opacity-100">
		</div>

		<!-- Main container -->
		<div
			class="relative rounded-2xl border-2 border-green-600/50 bg-black/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-green-400">

			<!-- Icon -->
			<div class="mb-4 text-6xl">🚀</div>

			<!-- Title -->
			<div class="mb-2 text-3xl font-bold text-white">ACCESS TUTORIALS</div>

			<!-- Subtitle in green -->
			<div class="font-mono text-green-400">ENTER TRAINING PROTOCOL</div>

			<!-- Scanning line effect (green version) -->
			<div
				class="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-green-400/20 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-[100%]">
			</div>
		</div>
	</a>
</div>


<!-- Tutorial Module Preview Cards - Authenticated Users Only -->
<div class="grid gap-8 md:grid-cols-3">
	{#each tutorialSections as section}
		<a href={section.href} class="group relative block">

			<!-- Green Glow -->
			<div
				class="absolute -inset-1 rounded-xl bg-gradient-to-r from-green-500 via-green-400 to-green-300 opacity-25 blur transition duration-500 group-hover:opacity-75">
			</div>

			<!-- Main Card -->
			<div
				class="relative rounded-xl border border-green-600/40 bg-black/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-green-400">

				<!-- Module Status -->
				<div class="mb-4 flex items-center justify-between">
					<div class="text-3xl">{section.icon}</div>
					<div class="rounded bg-green-400/10 px-2 py-1 font-mono text-xs text-green-400">
						AVAILABLE
					</div>
				</div>

				<!-- Module Info -->
				<h3 class="mb-2 text-xl font-bold text-white">{section.title}</h3>
				<p class="mb-4 text-sm text-green-200/70">{section.description}</p>

				<!-- Progress Bar -->
				<div class="mb-3 h-2 w-full rounded-full bg-green-950/40">
					<div
						class="h-2 w-0 rounded-full bg-gradient-to-r from-green-500 via-green-400 to-green-300 transition-all duration-1000 group-hover:w-full">
					</div>
				</div>

				<!-- Footer Label -->
				<div class="font-mono text-sm text-green-400">&gt; INITIALIZE MODULE_</div>
			</div>
		</a>
	{/each}
</div>

			{:else}


<!-- Call to Action for Non-Authenticated Users -->
<div class="mb-16 text-center">
	<div class="mx-auto max-w-3xl">
		<!-- Locked Content Visual -->
		<div class="relative mb-8">
			<div
				class="absolute -inset-2 rounded-2xl bg-gradient-to-r from-green-500 via-green-400 to-green-300 opacity-40 blur-xl">
			</div>
			<div
				class="relative rounded-2xl border-2 border-green-700 bg-black/90 p-12 backdrop-blur-sm">
				<div class="mb-6 text-7xl opacity-50">🔒</div>
				<h2 class="mb-4 text-4xl font-bold text-white">
					Authentication Required
				</h2>
				<p class="mb-8 text-lg text-green-300/70">
					Unlock access to 8 comprehensive Svelte training modules with interactive tutorials
					and hands-on coding experiences.
				</p>

				<!-- Action Buttons -->
				<div class="flex flex-col gap-4 sm:flex-row sm:justify-center">
					<a href="/api/auth/login" class="group relative inline-block">
						<div
							class="absolute -inset-1 rounded-xl bg-gradient-to-r from-green-500 to-green-300 opacity-60 blur transition duration-300 group-hover:opacity-100">
						</div>
						<div
							class="relative flex items-center justify-center gap-2 rounded-xl border-2 border-green-500/50 bg-black px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-green-400">
							<span class="text-xl">🔐</span>
							<span>Login to Continue</span>
						</div>
					</a>

					<a href="/api/auth/register" class="group relative inline-block">
						<div
							class="absolute -inset-1 rounded-xl bg-gradient-to-r from-green-400 to-green-200 opacity-60 blur transition duration-300 group-hover:opacity-100">
						</div>
						<div
							class="relative flex items-center justify-center gap-2 rounded-xl border-2 border-green-400/50 bg-black px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-green-300">
							<span class="text-xl">📝</span>
							<span>Create Account</span>
						</div>
					</a>
				</div>

				<!-- Features List -->
				<div class="mt-8 grid gap-4 text-left sm:grid-cols-2">
					<div class="flex items-start gap-3 text-sm text-green-300/70">
						<span class="text-lg">⚡</span>
						<span>Interactive code examples</span>
					</div>
					<div class="flex items-start gap-3 text-sm text-green-300/70">
						<span class="text-lg">🎯</span>
						<span>Real-world projects</span>
					</div>
					<div class="flex items-start gap-3 text-sm text-green-300/70">
						<span class="text-lg">🚀</span>
						<span>Progressive learning path</span>
					</div>
					<div class="flex items-start gap-3 text-sm text-green-300/70">
						<span class="text-lg">💡</span>
						<span>Expert-crafted content</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
{/if}

























			
			

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
