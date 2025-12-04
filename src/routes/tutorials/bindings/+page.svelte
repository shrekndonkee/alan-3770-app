<script lang="ts">
    import { marked } from 'marked';
    import InsecureQuestion from '$lib/components/InsecureQuestion.svelte';

    let name = $state('world');
    let markdownToShow = $state(
        `Here is *italics* and **bold**\n\n- And a list item\n\n- Another list item`
    );

    let scoops = $state(1);
    let availableFlavors = $state(['Vanilla', 'Chocolate', 'Strawberry']);
    let flavors = $state([] as string[]);
</script>

<main class="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-slate-50">
    <div class="mx-auto max-w-5xl px-4 pb-20 pt-10">
        <!-- HEADER / MODULE CARD -->
        <section
            class="relative mb-10 overflow-hidden rounded-2xl border border-fuchsia-500/40 bg-gradient-to-br from-fuchsia-950/80 via-slate-950 to-black/90 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-sm"
        >
            <div class="pointer-events-none absolute -inset-8 -z-10 rounded-[32px] bg-fuchsia-500/25 blur-3xl" />

            <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <div
                        class="mb-2 inline-flex items-center gap-2 rounded-full border border-fuchsia-500/40 bg-black/60 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-fuchsia-300/80"
                    >
                        <span class="h-1.5 w-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
                        <span>Module 05 · Bindings</span>
                    </div>

                    <h1
                        class="bg-gradient-to-r from-fuchsia-300 via-slate-100 to-fuchsia-400 bg-clip-text text-4xl font-black text-transparent md:text-5xl"
                    >
                        Bindings in Svelte
                    </h1>

                    <p class="mt-3 max-w-xl text-sm text-fuchsia-100/80 md:text-base">
                        Bind form elements, components, and complex state directly to your variables for
                        powerful, reactive UIs.
                    </p>
                </div>

                <div class="mt-2 text-xs font-mono text-fuchsia-300/80 md:mt-0">
                    <span class="text-fuchsia-400">&gt;</span> focus: two-way sync between UI and state
                </div>
            </div>
        </section>

        <!-- GRID: TEXT INPUT + MARKDOWN -->
        <section class="grid gap-6 md:grid-cols-2 mb-10">
            <!-- Text Input Binding -->
            <div
                class="rounded-2xl border border-fuchsia-600/30 bg-black/70 p-6 shadow-[0_14px_40px_rgba(0,0,0,0.75)]"
            >
                <header class="mb-4 flex items-center gap-3">
                    <span class="text-3xl">✍️</span>
                    <div>
                        <h2 class="text-lg font-semibold text-fuchsia-100">Text input binding</h2>
                        <p class="mt-1 text-xs text-slate-300">
                            Use <span class="text-fuchsia-300">bind:value</span> for classic two-way text input.
                        </p>
                    </div>
                </header>

                <div class="space-y-4">
                    <div>
                        <label class="mb-2 block text-sm text-slate-200">Type your name:</label>
                        <input
                            class="w-full rounded-lg border border-fuchsia-700/50 bg-black/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-fuchsia-400 focus:outline-none"
                            type="text"
                            bind:value={name}
                            placeholder="Enter text here..."
                        />
                    </div>

                    <div class="rounded-xl border border-fuchsia-700/40 bg-fuchsia-950/20 p-4">
                        <p class="mb-1 text-xs text-slate-400">OUTPUT</p>
                        <p class="text-2xl font-bold text-fuchsia-300">Hello {name}!</p>
                    </div>
                </div>
            </div>

            <!-- Textarea & Markdown -->
            <div
                class="rounded-2xl border border-fuchsia-600/30 bg-black/70 p-6 shadow-[0_14px_40px_rgba(0,0,0,0.75)]"
            >
                <header class="mb-4 flex items-center gap-3">
                    <span class="text-3xl">📝</span>
                    <div>
                        <h2 class="text-lg font-semibold text-fuchsia-100">Textarea & markdown</h2>
                        <p class="mt-1 text-xs text-slate-300">
                            Bind a textarea and render the result with <span class="text-fuchsia-300">@html</span>.
                        </p>
                    </div>
                </header>

                <div class="space-y-4">
                    <textarea
                        class="h-32 w-full resize-y rounded-lg border border-fuchsia-700/50 bg-black/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-fuchsia-400 focus:outline-none"
                        bind:value={markdownToShow}
                        placeholder="Type markdown here..."
                    ></textarea>

                    <div class="rounded-xl border border-fuchsia-700/40 bg-fuchsia-950/30 p-4">
                        <p class="mb-2 text-xs text-slate-400">RENDERED MARKDOWN</p>
                        <div class="prose prose-invert max-w-none text-sm">
                            {@html marked(markdownToShow)}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- NUMBER/RANGE + COMPONENT BINDING -->
        <section class="grid gap-6 md:grid-cols-2 mb-10">
            <!-- Number & Range Binding -->
            <div
                class="rounded-2xl border border-fuchsia-600/30 bg-black/70 p-6 shadow-[0_14px_40px_rgba(0,0,0,0.75)]"
            >
                <header class="mb-4 flex items-center gap-3">
                    <span class="text-3xl">🔢</span>
                    <div>
                        <h2 class="text-lg font-semibold text-fuchsia-100">Number & range inputs</h2>
                        <p class="mt-1 text-xs text-slate-300">
                            Sync multiple controls to the same numeric state using <span class="text-fuchsia-300">bind:value</span>.
                        </p>
                    </div>
                </header>

                <div class="space-y-6">
                    <div class="flex flex-col items-center justify-center gap-6 md:flex-row">
                        <div>
                            <label class="mb-2 block text-sm text-slate-200">Number input:</label>
                            <input
                                type="number"
                                bind:value={scoops}
                                class="w-24 rounded-lg border border-fuchsia-700/50 bg-black/70 px-3 py-2 text-center text-sm text-slate-100 focus:border-fuchsia-400 focus:outline-none"
                                min="1"
                                max="3"
                            />
                        </div>

                        <div class="flex-1 max-w-md">
                            <label class="mb-2 block text-sm text-slate-200">Range slider:</label>
                            <input
                                type="range"
                                bind:value={scoops}
                                class="w-full accent-fuchsia-400"
                                min="1"
                                max="3"
                                step="1"
                            />
                        </div>

                        <div class="rounded-xl border border-fuchsia-700/40 bg-fuchsia-950/30 px-6 py-4 text-center">
                            <p class="mb-1 text-xs text-slate-400">SCOOPS</p>
                            <p class="text-3xl font-bold text-fuchsia-300">{scoops}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Component Binding Example (InsecureQuestion) -->
            <div
                class="rounded-2xl border border-fuchsia-600/30 bg-black/70 p-6 shadow-[0_14px_40px_rgba(0,0,0,0.75)]"
            >
                <header class="mb-4 flex items-center gap-3">
                    <span class="text-3xl">⚠️</span>
                    <div>
                        <h2 class="text-lg font-semibold text-fuchsia-100">Component binding</h2>
                        <p class="mt-1 text-xs text-slate-300">
                            Bind to a child component’s internal state or props to mirror its values in the parent.
                        </p>
                    </div>
                </header>

                <p class="mb-3 text-xs text-slate-400">
                    This component demonstrates how bindings can expose internal values back to the parent.
                </p>

                <div class="rounded-xl border border-fuchsia-700/40 bg-fuchsia-950/20 p-4">
                    <InsecureQuestion />
                </div>
            </div>
        </section>

        <!-- ICE CREAM FORM -->
        <section class="mb-10">
            <div
                class="rounded-2xl border border-fuchsia-600/30 bg-black/70 p-6 shadow-[0_14px_40px_rgba(0,0,0,0.75)]"
            >
                <header class="mb-6 flex items-center gap-3">
                    <span class="text-3xl">🍦</span>
                    <div>
                        <h2 class="text-lg font-semibold text-fuchsia-100">Complete form example</h2>
                        <p class="mt-1 text-xs text-slate-300">
                            Combine <span class="text-fuchsia-300">bind:group</span> and
                            <span class="text-fuchsia-300">bind:value</span> to build a fully bound form.
                        </p>
                    </div>
                </header>

                <div class="rounded-2xl border border-fuchsia-700/40 bg-fuchsia-950/20 p-6">
                    <form>
                        <!-- Radio Buttons -->
                        <div class="mb-8">
                            <h3 class="mb-3 text-base font-semibold text-slate-100">Number of scoops</h3>
                            <div class="flex flex-wrap gap-3">
                                {#each [1, 2, 3] as scoopNum}
                                    <label
                                        class="flex cursor-pointer items-center gap-2 rounded-xl border border-fuchsia-700/40 bg-black/60 px-4 py-3 text-sm text-slate-100 transition hover:border-fuchsia-400 hover:bg-fuchsia-950/40"
                                    >
                                        <input
                                            class="h-4 w-4 accent-fuchsia-400"
                                            type="radio"
                                            value={scoopNum}
                                            bind:group={scoops}
                                        />
                                        <span class="font-semibold"
                                            >{scoopNum} Scoop{scoopNum > 1 ? 's' : ''}</span
                                        >
                                    </label>
                                {/each}
                            </div>
                        </div>

                        <!-- Checkboxes -->
                        <div class="mb-8">
                            <h3 class="mb-3 text-base font-semibold text-slate-100">Select flavors</h3>
                            <div class="mb-4 grid gap-3 md:grid-cols-3">
                                {#each availableFlavors as flavor}
                                    <label
                                        class="flex cursor-pointer items-center gap-2 rounded-xl border border-fuchsia-700/40 bg-black/60 px-4 py-3 text-sm text-slate-100 transition hover:border-fuchsia-400 hover:bg-fuchsia-950/40"
                                    >
                                        <input
                                            class="h-4 w-4 accent-fuchsia-400"
                                            type="checkbox"
                                            value={flavor}
                                            bind:group={flavors}
                                        />
                                        <span class="font-semibold">{flavor}</span>
                                    </label>
                                {/each}
                            </div>

                            <!-- Validation Messages -->
                            {#if flavors.length === 0}
                                <div
                                    class="mt-2 flex items-center gap-3 rounded-xl border border-red-500/40 bg-red-950/40 p-4 text-sm text-red-100"
                                >
                                    <span class="text-xl">❌</span>
                                    <p class="font-semibold">You must select at least one flavor!</p>
                                </div>
                            {:else if flavors.length > scoops}
                                <div
                                    class="mt-2 flex items-center gap-3 rounded-xl border border-amber-500/40 bg-amber-950/40 p-4 text-sm text-amber-100"
                                >
                                    <span class="text-xl">⚠️</span>
                                    <p class="font-semibold">
                                        You can only select {scoops} flavor{scoops > 1 ? 's' : ''}!
                                    </p>
                                </div>
                            {/if}
                        </div>

                        <!-- Multi-select -->
                        <div class="mb-8">
                            <h3 class="mb-3 text-base font-semibold text-slate-100">
                                Alternative: multi-select
                            </h3>
                            <select
                                class="w-full rounded-lg border border-fuchsia-700/50 bg-black/70 px-3 py-2 text-sm text-slate-100 focus:border-fuchsia-400 focus:outline-none"
                                multiple
                                bind:value={flavors}
                                size="3"
                            >
                                {#each availableFlavors as flavor}
                                    <option value={flavor}>{flavor}</option>
                                {/each}
                            </select>
                        </div>

                        <!-- Order Summary -->
                        <div
                            class="rounded-2xl border border-emerald-500/40 bg-gradient-to-r from-emerald-950/40 via-black to-emerald-900/40 p-6"
                        >
                            <h3 class="mb-2 text-base font-semibold text-emerald-100">Your order</h3>
                            <p class="text-sm text-slate-100">
                                <span class="font-bold">{scoops}</span> scoop{scoops > 1 ? 's' : ''} of
                                <span class="font-bold">
                                    {flavors.length > 0 ? flavors.join(', ') : 'nothing selected'}
                                </span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>

        <!-- KEY CONCEPTS -->
        <section
            class="mt-8 rounded-2xl border border-fuchsia-600/40 bg-gradient-to-r from-slate-950 via-fuchsia-950/40 to-slate-950 px-6 py-5 text-sm text-slate-300"
        >
            <div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div class="md:w-1/2">
                    <p class="font-mono text-xs uppercase tracking-[0.18em] text-fuchsia-300">
                        Binding types
                    </p>
                    <p class="mt-1 text-slate-200">
                        Bindings keep your UI and state in sync. Use them carefully to avoid “magic” and keep your
                        data flow understandable.
                    </p>
                </div>

                <div class="grid gap-3 md:w-1/2 md:grid-cols-2">
                    <div class="rounded-xl border border-fuchsia-700/40 bg-black/60 p-4">
                        <h4 class="mb-1 text-sm font-semibold text-fuchsia-100">bind:value</h4>
                        <p class="text-xs text-slate-300">Text inputs, numbers, textareas, selects.</p>
                    </div>
                    <div class="rounded-xl border border-fuchsia-700/40 bg-black/60 p-4">
                        <h4 class="mb-1 text-sm font-semibold text-fuchsia-100">bind:group</h4>
                        <p class="text-xs text-slate-300">Radio groups & checkbox groups.</p>
                    </div>
                    <div class="rounded-xl border border-fuchsia-700/40 bg-black/60 p-4">
                        <h4 class="mb-1 text-sm font-semibold text-fuchsia-100">bind:checked</h4>
                        <p class="text-xs text-slate-300">Single checkbox boolean state.</p>
                    </div>
                    <div class="rounded-xl border border-fuchsia-700/40 bg-black/60 p-4">
                        <h4 class="mb-1 text-sm font-semibold text-fuchsia-100">Component bindings</h4>
                        <p class="text-xs text-slate-300">
                            Expose internal state from children back up to their parents.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</main>
