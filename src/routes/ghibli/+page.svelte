<script lang="ts">
    import { onMount } from 'svelte';

    type Film = {
        id: string;
        title: string;
        description?: string;
        release_date?: string;
        rt_score?: string;
    };

    let films: Film[] = [];
    let loading = true;
    let error: string | null = null;

    // Emoji per movie title
    function emojiForTitle(title: string): string {
        const map: Record<string, string> = {
            'My Neighbor Totoro': '🌳',
            'Spirited Away': '🐉',
            'Princess Mononoke': '🐺',
            "Kiki's Delivery Service": '🧹',
            'Howl\'s Moving Castle': '🏰',
            'Ponyo': '🌊',
            'Castle in the Sky': '☁️',
            'Nausicaä of the Valley of the Wind': '🌾',
            'Grave of the Fireflies': '🕯️',
            'The Wind Rises': '💨',
            'Whisper of the Heart': '🎻',
            'From Up on Poppy Hill': '⛪',
            "The Cat Returns": '🐈',
            'Pom Poko': '🦝',
            'Porco Rosso': '✈️',
            'My Neighbors the Yamadas': '🏠',
            'Only Yesterday': '🌸',
            'Ocean Waves': '🌊',
            'Tales from Earthsea': '🐉',
            'The Tale of the Princess Kaguya': '🌕',
            'When Marnie Was There': '🏚️',
            'Earwig and the Witch': '🧙‍♀️',
            'Arrietty': '🧚',
            'The Secret World of Arrietty': '🧚'
        };

        return map[title] ?? '🎬';
    }

    onMount(async () => {
        try {
            const res = await fetch('https://ghibliapi.vercel.app/films');
            if (!res.ok) throw new Error('Failed to load films');
            const data = await res.json();
            films = (data as Film[]).slice(0, 25);
        } catch (e) {
            error = e instanceof Error ? e.message : 'Unknown error';
        } finally {
            loading = false;
        }
    });
</script>

<main class="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-slate-50">
    <div class="mx-auto max-w-5xl px-4 pb-20 pt-10">
        <!-- HEADER / MODULE CARD (indigo / purple like the card) -->
        <section
            class="relative mb-10 overflow-hidden rounded-2xl border border-indigo-500/40 bg-gradient-to-br from-indigo-950/80 via-slate-950 to-black/90 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-sm"
        >
            <div class="pointer-events-none absolute -inset-8 -z-10 rounded-[32px] bg-indigo-500/25 blur-3xl" />

            <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <div
                        class="mb-2 inline-flex items-center gap-2 rounded-full border border-indigo-500/40 bg-black/60 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-indigo-300/80"
                    >
                        <span class="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
                        <span>Module · Dynamic Routes</span>
                    </div>

                    <h1
                        class="bg-gradient-to-r from-indigo-300 via-slate-100 to-violet-400 bg-clip-text text-3xl font-black text-transparent md:text-4xl"
                    >
                        Studio Ghibli Movie Explorer
                    </h1>

                    <p class="mt-3 max-w-xl text-sm text-indigo-100/80 md:text-base">
                        Each movie links to a dynamic route at
                        <span class="font-mono text-indigo-300">/ghibli/[id]</span>, powered by the Studio
                        Ghibli API.
                    </p>
                </div>

                <div class="mt-2 text-xs font-mono text-indigo-300/80 md:mt-0">
                    <span class="text-indigo-400">&gt;</span> focus: remote data + dynamic params
                </div>
            </div>
        </section>

        <!-- STATUS / LOADING -->
        {#if loading}
            <div
                class="mb-6 rounded-2xl border border-indigo-600/40 bg-black/70 p-3 text-center text-sm text-slate-200 shadow-[0_16px_40px_rgba(0,0,0,0.7)]"
            >
                Fetching films from the Ghibli API…
            </div>
        {:else if error}
            <div
                class="mb-6 rounded-2xl border border-rose-500/50 bg-rose-950/40 p-3 text-center text-sm text-rose-100 shadow-[0_16px_40px_rgba(0,0,0,0.7)]"
            >
                Failed to load films: {error}
            </div>
        {/if}

        <!-- GRID OF “CYBER CONSOLE” MOVIE BUTTONS -->
        {#if !loading && !error}
            <section class="space-y-4">
                <p class="text-xs font-mono uppercase tracking-[0.2em] text-indigo-300">
                    Select a film to open its dynamic route
                </p>

                <div class="grid gap-4 md:grid-cols-2">
                    {#each films as film}
                        <a
                            href={`/ghibli/${film.id}`}
                            class="group relative block overflow-hidden rounded-2xl border border-indigo-500/40 bg-slate-950/80 px-4 py-4 shadow-[0_16px_40px_rgba(0,0,0,0.8)] transition-transform duration-200 hover:-translate-y-1 hover:border-indigo-300"
                        >
                            <!-- Glow -->
                            <div
                                class="pointer-events-none absolute -inset-px bg-gradient-to-r from-indigo-500/0 via-violet-500/10 to-indigo-500/0 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
                            />

                            <div class="relative flex items-start justify-between gap-3">
                                <div>
                                    <div class="mb-1 flex items-center gap-2">
                                        <span class="text-2xl">
                                            {emojiForTitle(film.title)}
                                        </span>
                                        <h2 class="text-sm font-semibold text-slate-50 md:text-base">
                                            {film.title}
                                        </h2>
                                    </div>
                                    <p class="mt-1 line-clamp-2 text-xs text-slate-400">
                                        {film.description}
                                    </p>
                                </div>

                                <div class="ml-3 flex flex-col items-end text-right text-[10px] text-indigo-300">
                                    {#if film.release_date}
                                        <span class="uppercase tracking-[0.16em]">
                                            {film.release_date}
                                        </span>
                                    {/if}
                                    {#if film.rt_score}
                                        <span class="mt-1 rounded-full border border-indigo-500/40 bg-indigo-500/10 px-2 py-0.5">
                                            RT {film.rt_score}
                                        </span>
                                    {/if}
                                </div>
                            </div>

                            <!-- Little bottom bar -->
                            <div class="relative mt-3 flex items-center justify-between text-[10px] text-slate-400">
                                <span class="font-mono">
                                    &gt; /ghibli/{film.id}
                                </span>
                                <span
                                    class="font-mono uppercase tracking-[0.18em] text-indigo-300 group-hover:text-indigo-200"
                                >
                                    OPEN →
                                </span>
                            </div>
                        </a>
                    {/each}
                </div>
            </section>
        {/if}

        <!-- FOOTER SUMMARY -->
        <section
            class="mt-10 rounded-2xl border border-indigo-600/40 bg-gradient-to-r from-slate-950 via-indigo-950/40 to-slate-950 px-6 py-5 text-sm text-slate-300"
        >
            <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                    <p class="font-mono text-xs uppercase tracking-[0.18em] text-indigo-300">
                        Dynamic routes takeaway
                    </p>
                    <p class="mt-1 text-slate-200">
                        Each button here maps an API item to a URL with its ID. The detail page can read that ID from
                        the route params and fetch its full data.
                    </p>
                </div>
                <div class="mt-2 text-xs text-indigo-300/90 md:mt-0">
                    <span class="text-indigo-400">&gt;</span> Back to:
                    <a
                        href="/tutorials"
                        class="ml-1 underline decoration-indigo-400/60 underline-offset-4 hover:decoration-indigo-300"
                    >
                        Module overview
                    </a>
                </div>
            </div>
        </section>
    </div>
</main>

