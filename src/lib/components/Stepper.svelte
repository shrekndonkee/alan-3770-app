<script lang="ts">
	let { increment, decrement, twClass } = $props();
    
</script>

<button type="button" class="btn preset-filled-primary-500 w-16 {twClass}" onclick={decrement}>-1</button>
<button type="button" class="btn preset-filled-primary-500 w-16 {twClass}" onclick={increment}>+1</button>