<script lang="ts">
    interface Question {
        id: number;
        text: string;
    }

    let wantUpdates = $state(false);
    let selected = $state<Question | undefined>();
    let answer = $state("");

    let questions: Question[] = [
        { id: 1, text: "Which part of bindings do you want to explore more?" },
        { id: 2, text: "What UI elements do you find easiest to bind?" },
        { id: 3, text: "What bindings feel confusing or unintuitive?" }
    ];

    function handleSubmit() {
        alert(
            `Feedback submitted!\n\nTopic: ${selected?.text}\nYour answer: ${answer}\nReceive updates: ${wantUpdates}`
        );
    }
</script>

<div
    class="relative mx-auto w-full max-w-2xl rounded-2xl border border-indigo-500/40 
    bg-gradient-to-br from-indigo-950/60 via-slate-950 to-black/90 p-6 
    shadow-[0_18px_50px_rgba(0,0,0,0.85)]"
>
    <!-- glow -->
    <div class="pointer-events-none absolute -inset-6 rounded-3xl bg-indigo-500/20 blur-2xl -z-10"></div>

    <!-- title -->
    <h2
        class="mb-4 bg-gradient-to-r from-indigo-300 via-slate-100 to-violet-300 
        bg-clip-text text-2xl font-bold text-transparent"
    >
        Form Bindings — Interactive Example
    </h2>

    <p class="mb-6 text-sm text-indigo-100/80">
        This component demonstrates how <span class="font-mono text-indigo-300">bind:value</span> and
        <span class="font-mono text-indigo-300">bind:checked</span> connect your UI to live state.
    </p>

    <form class="space-y-5" on:submit|preventDefault={handleSubmit}>
        <!-- Checkbox -->
        <label class="flex items-center gap-3 text-indigo-200">
            <input
                class="checkbox rounded border-indigo-500 bg-black/40"
                type="checkbox"
                bind:checked={wantUpdates}
            />
            <span class="text-sm">Notify me when new binding modules release</span>
        </label>

        <!-- Select -->
        <div>
            <label class="text-indigo-300 font-mono text-xs uppercase tracking-wider">
                Choose a topic
            </label>
            <select
                class="mt-2 w-full rounded-lg border border-indigo-600/40 bg-black/40 p-3 
                text-indigo-100 focus:border-indigo-400 focus:outline-none"
                bind:value={selected}
                required
            >
                <option value="" disabled selected>Select one…</option>
                {#each questions as q}
                    <option value={q}>{q.text}</option>
                {/each}
            </select>
        </div>

        <!-- Text Input -->
        <div>
            <label class="text-indigo-300 font-mono text-xs uppercase tracking-wider">
                Your response
            </label>
            <input
                class="mt-2 w-full rounded-lg border border-indigo-600/40 bg-black/40 p-3 
                text-indigo-100 placeholder-indigo-700 focus:border-indigo-400 focus:outline-none"
                bind:value={answer}
                placeholder="Type your thoughts…"
                required
            />
        </div>

        <!-- Submit -->
        <button
            type="submit"
            class="mt-3 inline-flex items-center gap-2 rounded-xl border border-indigo-400/60 
            bg-indigo-500/20 px-5 py-2.5 text-xs font-mono uppercase tracking-[0.18em] 
            text-indigo-200 shadow-[0_0_20px_rgba(99,102,241,0.3)] 
            transition hover:bg-indigo-500/30 hover:border-indigo-300 
            hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] active:scale-[0.97]"
        >
            <span>✔</span>
            <span>Submit Feedback</span>
        </button>
    </form>
</div>
