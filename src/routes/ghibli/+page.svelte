<script lang="ts">
    import { onMount } from 'svelte';

    let films: any[] = [];

    onMount(async () => {
        const res = await fetch('https://ghibliapi.vercel.app/films');
        const data = await res.json();

        // Get first 25 films (or fewer if API returns less)
        films = data.slice(0, 25);
    });
</script>

<main>
    <div class="flex flex-wrap m-4">
        {#each films as film}
            <div class="m-3">
                <a 
                    href={`/tutorials/ghibli/${film.id}`} 
                    class="border p-2 rounded-lg bg-primary-50-950 hover:underline"
                >
                    {film.title}
                </a>
            </div>
        {/each}
    </div>
</main>
