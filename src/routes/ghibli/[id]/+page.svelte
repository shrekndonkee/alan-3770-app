<script lang="ts">
    let { data } = $props();
    let { film } = data;
</script>

<main class="flex flex-col h-[calc(100vh-170px)] items-center justify-center">
    <div class="text-center mx-auto max-w-xl px-4">

        <h1 class="text-3xl font-bold mb-4">{film.title}</h1>

        <img 
            src="{film.image}" 
            alt="{film.title}" 
            class="mb-4 mx-auto rounded-lg shadow-lg max-w-sm"
        />

        <p class="text-lg mb-2"><strong>ID:</strong> {film.id}</p>
        <p class="text-lg mb-2"><strong>Director:</strong> {film.director}</p>
        <p class="text-lg mb-2"><strong>Producer:</strong> {film.producer}</p>
        <p class="text-lg mb-2"><strong>Release Year:</strong> {film.release_date}</p>
        <p class="text-lg mb-4"><strong>Runtime:</strong> {film.running_time} minutes</p>

        <p class="text-base italic text-gray-300 max-w-prose mx-auto">
            {film.description}
        </p>

    </div>
</main>
