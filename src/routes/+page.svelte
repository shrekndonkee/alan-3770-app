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
			title: 'Reactivity',
			description: "Master Svelte's reactive magic",
			href: '/tutorials/reactivity',
			icon: '⚡',
			glow: 'from-emerald-500 via-emerald-400 to-emerald-300',
			border: 'border-emerald-600/40 hover:border-emerald-400',
			bg: 'bg-emerald-950/60',
			bar: 'from-emerald-500 via-emerald-400 to-emerald-300'
		},
		{
			title: 'Props',
			description: 'Component communication patterns',
			href: '/tutorials/props',
			icon: '🧩', // different from Bindings
			glow: 'from-sky-500 via-sky-400 to-sky-300',
			border: 'border-sky-600/40 hover:border-sky-400',
			bg: 'bg-sky-950/60',
			bar: 'from-sky-500 via-sky-400 to-sky-300'
		},
		{
			title: 'Logic',
			description: 'Conditional rendering & loops',
			href: '/tutorials/logic',
			icon: '🧠',
			glow: 'from-lime-500 via-lime-400 to-lime-300',
			border: 'border-lime-600/40 hover:border-lime-400',
			bg: 'bg-lime-950/60',
			bar: 'from-lime-500 via-lime-400 to-lime-300'
		},
		{
			title: 'Events',
			description: 'Components send and respond to actions',
			href: '/tutorials/events',
			icon: '🔔',
			glow: 'from-amber-500 via-amber-400 to-amber-300',
			border: 'border-amber-600/40 hover:border-amber-400',
			bg: 'bg-amber-950/60',
			bar: 'from-amber-500 via-amber-400 to-amber-300'
		},
		{
			title: 'Bindings',
			description: 'Connect values between your code',
			href: '/tutorials/bindings',
			icon: '🔗',
			glow: 'from-fuchsia-500 via-fuchsia-400 to-fuchsia-300',
			border: 'border-fuchsia-600/40 hover:border-fuchsia-400',
			bg: 'bg-fuchsia-950/60',
			bar: 'from-fuchsia-500 via-fuchsia-400 to-fuchsia-300'
		},
		{
			title: 'Classes & Styles',
			description:
				"Change an element’s appearance by binding CSS classes or inline styles to reactive state.",
			href: '/tutorials/classes-styles',
			icon: '🎨',
			glow: 'from-rose-500 via-rose-400 to-rose-300',
			border: 'border-rose-600/40 hover:border-rose-400',
			bg: 'bg-rose-950/60',
			bar: 'from-rose-500 via-rose-400 to-rose-300'
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
	<a href="/tutorials" class="group relative inline-block">

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

			<!-- Colored Glow -->
			<div
				class={`absolute -inset-1 rounded-xl bg-gradient-to-r opacity-25 blur transition duration-500 group-hover:opacity-75 ${section.glow}`}>
			</div>

			<!-- Main Card -->
			<div
				class={`relative rounded-xl border ${section.border} ${section.bg} p-6 backdrop-blur-sm transition-all duration-300`}>

				<!-- Icon row (badge removed) -->
				<div class="mb-4 flex items-center justify-between">
					<div class="text-3xl">{section.icon}</div>
				</div>

				<!-- Module Info -->
				<h3 class="mb-2 text-xl font-bold text-white">{section.title}</h3>
				<p class="mb-4 text-sm text-green-100/80">{section.description}</p>

				<!-- Progress Bar (per-card color, animates on hover) -->
				<div class="mt-2 h-2 w-full rounded-full bg-black/40">
					<div
						class={`h-2 w-0 rounded-full bg-gradient-to-r ${section.bar} transition-all duration-700 group-hover:w-full`}>
					</div>
				</div>

				<!-- Footer label removed -->
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
				<div class="mb-6 text-7xl opacity-50 animate-bounce">🔒</div>
				<h2 class="mb-4 text-4xl font-bold text-white">
					Authentication Required
				</h2>
				<p class="mb-8 text-lg text-green-300/70">
					Unlock access to 8 comprehensive Svelte training modules with interactive tutorials
					and hands-on coding experiences.
				</p>

			<!-- Action Buttons -->
<div class="flex flex-col gap-4 sm:flex-row sm:justify-center">

	<!-- LOGIN BUTTON -->
	<a href="/api/auth/login"
		class="flex items-center justify-center gap-2 rounded-2xl bg-green-800 px-8 py-4 font-semibold text-white shadow-md transition-all duration-200 hover:bg-green-700 active:scale-95">
		
		
		<span>Login to Continue</span>
	</a>

	<!-- REGISTER BUTTON -->
	<a href="/api/auth/register"
		class="flex items-center justify-center gap-2 rounded-2xl bg-green-500 px-8 py-4 font-semibold text-white shadow-md transition-all duration-200 hover:bg-green-400 active:scale-95">
		
		
		<span>Create Account</span>
	</a>

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
