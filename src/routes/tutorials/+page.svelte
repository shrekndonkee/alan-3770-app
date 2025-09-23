<script lang="ts">
  import { onMount } from 'svelte';
  
  let src = "dog.jpg";
  let heroElement: HTMLElement;
  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<!-- Hero Section (Black / Gray / Dark-Green) -->
<section 
  bind:this={heroElement}
  class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-800"
>
  <!-- Main Hero Content -->
  <div class="relative z-10 max-w-6xl mx-auto px-6 py-20">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      
      <!-- Left Content -->
      <div class="text-center lg:text-left space-y-8">
        <div class="space-y-4">
          <h1 class="text-5xl md:text-7xl font-black text-white leading-tight">
            Master
            <span class="block bg-gradient-to-r from-green-400 via-emerald-400 to-green-600 bg-clip-text text-transparent">
              Svelte
            </span>
            <span class="block text-gray-200">Development</span>
          </h1>
          
          <p class="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
            Embark on an epic journey to learn modern web development with Svelte. 
            From reactive magic to component mastery — become the developer you were meant to be.
          </p>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a 
            href="/tutorials/reactivity" 
            class="text-lg px-8 py-4 rounded-xl shadow-2xl bg-green-600 text-white hover:bg-green-500 hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300"
          >
            🚀 Start Learning
          </a>
          <a 
            href="/tutorials/props" 
            class="text-lg px-8 py-4 rounded-xl border-2 border-green-600/50 text-green-200 hover:bg-green-600/10 hover:border-green-500 transform hover:scale-105 transition-all duration-300"
          >
            📚 Explore Topics
          </a>
        </div>

        <!-- Feature Tags -->
        <div class="flex flex-wrap gap-3 justify-center lg:justify-start">
          <span class="text-sm px-4 py-2 rounded-full bg-green-500/10 text-green-300 border border-green-600/30">⚡ Reactive</span>
          <span class="text-sm px-4 py-2 rounded-full bg-gray-700/40 text-gray-200 border border-gray-600/50">🎯 Component-Based</span>
          <span class="text-sm px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-600/30">🔥 Modern</span>
          <span class="text-sm px-4 py-2 rounded-full bg-green-700/10 text-green-400 border border-green-700/40">💪 Powerful</span>
        </div>
      </div>

      <!-- Right Content - Image -->
      <div class="relative">
        <div class="relative group">
          <!-- Glowing background effect (green) -->
          <div class="absolute -inset-4 bg-gradient-to-r from-green-600 via-emerald-500 to-green-700 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
          
          <!-- Image container -->
          <div class="relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-green-600/20 shadow-2xl">
            <img 
              {src} 
              alt="Pikachu with Thor's Hammer - Your Development Journey Mascot" 
              class="w-full h-auto max-w-md mx-auto rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-500"
              class:animate-pulse={!mounted}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
