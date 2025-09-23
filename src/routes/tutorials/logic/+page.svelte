<script lang="ts">
	import Counter from '$lib/components/Counter.svelte';
	import { counter } from '$lib/global/globalCount.svelte';
	import { faker } from '@faker-js/faker';
	import { Switch } from '@skeletonlabs/skeleton-svelte';
    import { getRandomNumber } from '$lib/utils/delayFunction';
    import { ProgressRing } from '@skeletonlabs/skeleton-svelte';

	let visibleState = $state(false);
	let promise = getRandomNumber();

	const twentyFiveAvatars = [...Array(25)].map(() => {
		const fullName = faker.person.fullName();
		const avatarUrl = faker.image.avatar();
		return { fullName, avatarUrl };
	});
</script>

<div
	class="mx-auto flex w-3/4 flex-col items-center gap-4 card preset-filled-surface-100-900 p-4 text-center"
>
	<h1 class="text-3xl font-bold underline">Logic Tutorials Coming Soon!</h1>

	<div class="w-64">
		<Counter />
	</div>

	{#if counter.count > 10}
		<p>{counter.count} is greater than 10</p>
	{/if}

	<Switch
		name="avatarSwitch"
		checked={visibleState}
		onCheckedChange={(e) => (visibleState = !visibleState)}
	/>

	{#if visibleState}
		<p>Avatars are visible!</p>
		<div class="flex flex-wrap justify-center gap-4">
			{#each twentyFiveAvatars as avatar}
				<div class="flex flex-col items-center gap-2">
					<img
						src={avatar.avatarUrl}
						alt={avatar.fullName}
						class="h-16 w-16 rounded-full border-2 border-primary-500"
					/>
					<p class="text-sm font-medium">{avatar.fullName}</p>
				</div>
			{/each}
		</div>
	{:else}
		<p>Avatars are not visible</p>
	{/if}

    {#await promise}
       <ProgressRing value={null} size="size-14" meterStroke="stroke-tertiary-600-400" trackStroke="stroke-tertiary-50-950" />
    {:then number}
        <p>Random number: {number}</p>
    {:catch error}
        <p>Error loading number: {error.message}</p>
    {/await}
    
</div>