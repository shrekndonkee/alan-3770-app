<script lang="ts">
	let { children } = $props();
</script>

<nav>
	<ul class="flex gap-4 p-2 bg-amber-400">
		<li><a href="/">Home</a></li>
		<li><a href="/tutorials">Tutorial Home</a></li>
		<li><a href="/tutorials/reactivity">Reactivity</a></li>
		<li><a href="/tutorials/props">Props</a></li>
		<li><a href="/tutorials/logic">Logic</a></li>
	</ul>
</nav>

{@render children?.()}