<script lang="ts">
	let { children } = $props();
</script>

<nav class="bg-[#0f362d] text-emerald-100 shadow-md">
  <ul class="flex flex-wrap justify-center gap-8 px-6 py-4 text-[15px] font-medium tracking-wide">
    <li><a href="/" class="hover:text-white hover:underline decoration-emerald-400 underline-offset-4">Home</a></li>
    <li><a href="/tutorials" class="hover:text-white hover:underline decoration-emerald-400 underline-offset-4">Tutorial Home</a></li>
    <li><a href="/tutorials/reactivity" class="hover:text-white hover:underline decoration-emerald-400 underline-offset-4">Reactivity</a></li>
    <li><a href="/tutorials/props" class="hover:text-white hover:underline decoration-emerald-400 underline-offset-4">Props</a></li>
    <li><a href="/tutorials/logic" class="hover:text-white hover:underline decoration-emerald-400 underline-offset-4">Logic</a></li>
    <li><a href="/tutorials/events" class="hover:text-white hover:underline decoration-emerald-400 underline-offset-4">Events</a></li>
    <li><a href="/tutorials/bindings" class="hover:text-white hover:underline decoration-emerald-400 underline-offset-4">Bindings</a></li>
        <li><a href="/tutorials/classes-styles" class="hover:text-white hover:underline decoration-emerald-400 underline-offset-4">Classes & Styles</a></li>
        <li><a href="/tutorials/motion" class="hover:text-white hover:underline decoration-emerald-400 underline-offset-4">Motion</a></li>
    <li><a href="/ghibli" class="hover:text-white hover:underline decoration-emerald-400 underline-offset-4">Dynamic Routes: Ghibli Films</a></li>
  </ul>
</nav>

{@render children?.()}