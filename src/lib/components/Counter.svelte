<script lang="ts">
import {counter} from '$lib/global/globalState.svelte';
</script>

<button class="btn preset-filled-primary-950-50" onclick={
  () => counter.count += 1
}>
	Clicked {counter.count}
	{counter.count === 1 ? 'time' : 'times'}
</button>