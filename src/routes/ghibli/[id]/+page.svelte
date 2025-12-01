<script lang="ts">
    let { data } = $props();
    let { film } = data;
</script>

<main class="min-h-[calc(100vh-170px)] flex justify-center px-4 py-10">
    <div class="text-center mx-auto max-w-xl">

        <h1 class="text-3xl font-bold mb-6">{film.title}</h1>

        <img
            src={film.image}
            alt={film.title}
            class="mb-6 mx-auto rounded-lg shadow-lg w-full max-w-xs h-auto"
        />

        <div class="space-y-2 mb-6 text-left">
            <p class="text-lg"><strong>Director:</strong> {film.director}</p>
            <p class="text-lg"><strong>Producer:</strong> {film.producer}</p>
            <p class="text-lg"><strong>Release Year:</strong> {film.release_date}</p>
            <p class="text-lg"><strong>Runtime:</strong> {film.running_time} minutes</p>
        </div>

        <p class="text-base max-w-prose mx-auto text-left">
            {film.description}
        </p>

    </div>
</main>
