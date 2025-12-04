<script lang="ts">
    let { data } = $props();
    let { film } = data;

    type FilmTheme = {
        cardBorder: string;
        gradient: string;
        glow: string;
        titleAccent: string;
        chipBg: string;
        chipText: string;
    };

    function themeFor(title: string): FilmTheme {
        const themes: Record<string, FilmTheme> = {
            'Spirited Away': {
                cardBorder: 'border-rose-500/60',
                gradient: 'from-rose-950/70 via-slate-950 to-black/90',
                glow: 'bg-rose-500/25',
                titleAccent: 'text-rose-200',
                chipBg: 'bg-rose-950/70 border-rose-500/60',
                chipText: 'text-rose-100'
            },
            'My Neighbor Totoro': {
                cardBorder: 'border-emerald-500/60',
                gradient: 'from-emerald-950/70 via-slate-950 to-black/90',
                glow: 'bg-emerald-500/25',
                titleAccent: 'text-emerald-200',
                chipBg: 'bg-emerald-950/70 border-emerald-500/60',
                chipText: 'text-emerald-100'
            },
            'Princess Mononoke': {
                cardBorder: 'border-lime-500/60',
                gradient: 'from-lime-950/70 via-slate-950 to-black/90',
                glow: 'bg-lime-500/25',
                titleAccent: 'text-lime-200',
                chipBg: 'bg-lime-950/70 border-lime-500/60',
                chipText: 'text-lime-100'
            },
            "Kiki's Delivery Service": {
                cardBorder: 'border-violet-500/60',
                gradient: 'from-violet-950/70 via-slate-950 to-black/90',
                glow: 'bg-violet-500/25',
                titleAccent: 'text-violet-200',
                chipBg: 'bg-violet-950/70 border-violet-500/60',
                chipText: 'text-violet-100'
            },
            "Howl's Moving Castle": {
                cardBorder: 'border-indigo-500/60',
                gradient: 'from-indigo-950/70 via-slate-950 to-black/90',
                glow: 'bg-indigo-500/25',
                titleAccent: 'text-indigo-200',
                chipBg: 'bg-indigo-950/70 border-indigo-500/60',
                chipText: 'text-indigo-100'
            },
            Ponyo: {
                cardBorder: 'border-sky-500/60',
                gradient: 'from-sky-950/70 via-slate-950 to-black/90',
                glow: 'bg-sky-500/25',
                titleAccent: 'text-sky-200',
                chipBg: 'bg-sky-950/70 border-sky-500/60',
                chipText: 'text-sky-100'
            },
            'Castle in the Sky': {
                cardBorder: 'border-cyan-500/60',
                gradient: 'from-cyan-950/70 via-slate-950 to-black/90',
                glow: 'bg-cyan-500/25',
                titleAccent: 'text-cyan-200',
                chipBg: 'bg-cyan-950/70 border-cyan-500/60',
                chipText: 'text-cyan-100'
            },
            'Nausicaä of the Valley of the Wind': {
                cardBorder: 'border-teal-500/60',
                gradient: 'from-teal-950/70 via-slate-950 to-black/90',
                glow: 'bg-teal-500/25',
                titleAccent: 'text-teal-200',
                chipBg: 'bg-teal-950/70 border-teal-500/60',
                chipText: 'text-teal-100'
            },
            'Grave of the Fireflies': {
                cardBorder: 'border-amber-500/60',
                gradient: 'from-amber-950/70 via-slate-950 to-black/90',
                glow: 'bg-amber-500/25',
                titleAccent: 'text-amber-200',
                chipBg: 'bg-amber-950/70 border-amber-500/60',
                chipText: 'text-amber-100'
            },
            'The Wind Rises': {
                cardBorder: 'border-sky-400/70',
                gradient: 'from-sky-950/70 via-slate-950 to-black/90',
                glow: 'bg-sky-400/25',
                titleAccent: 'text-sky-200',
                chipBg: 'bg-sky-950/70 border-sky-400/60',
                chipText: 'text-sky-100'
            }
        };

        const fallback: FilmTheme = {
            cardBorder: 'border-slate-600/70',
            gradient: 'from-slate-950 via-slate-950 to-black',
            glow: 'bg-slate-500/25',
            titleAccent: 'text-slate-200',
            chipBg: 'bg-slate-950/70 border-slate-600/60',
            chipText: 'text-slate-100'
        };

        return themes[title] ?? fallback;
    }

    let theme = themeFor(film.title);
</script>

<main class="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-slate-50">
    <div class="flex min-h-[calc(100vh-130px)] items-center justify-center px-4 py-10">
        <section
            class={`relative w-full max-w-5xl rounded-3xl border bg-gradient-to-br p-6 shadow-[0_24px_70px_rgba(0,0,0,0.9)] md:p-8 ${theme.cardBorder} ${theme.gradient}`}
        >
            <!-- Glow -->
            <div
                class={`pointer-events-none absolute -inset-10 -z-10 rounded-[40px] blur-3xl ${theme.glow}`}
            />

            <div class="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] md:items-center">
                <!-- Poster -->
                <div class="flex flex-col items-center gap-4">
                    <!-- TITLE: solid white, bold -->
                    <h1
                        class="text-center text-2xl font-black tracking-tight text-white md:text-3xl"
                    >
                        {film.title}
                    </h1>

                    <div
                        class="rounded-2xl border border-slate-700/70 bg-slate-900/80 shadow-[0_18px_50px_rgba(0,0,0,0.85)] max-w-sm w-full"
                    >
                        <img
                            src={film.image}
                            alt={film.title}
                            class="w-full h-auto max-h-[420px] object-contain"
                        />
                    </div>
                </div>

                <!-- Info + description -->
                <div
                    class="flex max-h-[420px] flex-col gap-4 md:max-h-[460px]"
                >
                    <!-- Meta chips -->
                    <div class="flex flex-wrap gap-2 text-xs">
                        <span
                            class={`inline-flex items-center gap-1 rounded-full border px-3 py-1 font-mono uppercase tracking-[0.18em] ${theme.chipBg} ${theme.chipText}`}
                        >
                            <span class="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            {film.release_date}
                        </span>
                        <span
                            class={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-[11px] ${theme.chipBg} ${theme.chipText}`}
                        >
                            🎬 {film.running_time} min
                        </span>
                        <span
                            class={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-[11px] ${theme.chipBg} ${theme.chipText}`}
                        >
                            🎞️ Directed by {film.director}
                        </span>
                    </div>

                    <!-- Credits -->
                    <div class="space-y-1 text-xs md:text-sm text-slate-200">
                        <p>
                            <span class="font-semibold text-slate-100">Director:</span>
                            <span class="ml-1 text-slate-300">{film.director}</span>
                        </p>
                        <p>
                            <span class="font-semibold text-slate-100">Producer:</span>
                            <span class="ml-1 text-slate-300">{film.producer}</span>
                        </p>
                        <p>
                            <span class="font-semibold text-slate-100">Release Year:</span>
                            <span class="ml-1 text-slate-300">{film.release_date}</span>
                        </p>
                        <p>
                            <span class="font-semibold text-slate-100">Runtime:</span>
                            <span class="ml-1 text-slate-300">{film.running_time} minutes</span>
                        </p>
                    </div>

                    <!-- Description (scrollable so the card fits onscreen) -->
                    <div
                        class="mt-2 max-h-52 overflow-y-auto pr-2 text-xs leading-relaxed text-slate-200 md:max-h-64 md:text-sm"
                    >
                        {film.description}
                    </div>

                    <!-- Route hint -->
                    <div class="mt-2 text-[10px] font-mono uppercase tracking-[0.18em] text-slate-400">
                        &gt; route: <span class="text-slate-200">/ghibli/{film.id}</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</main>
