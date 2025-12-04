<script lang="ts">
  import Counter from "$lib/components/Counter.svelte";

  let count = $state(0);
  let numbers = $state([1, 2, 3, 4]);
  let total = $derived(numbers.reduce((acc, n) => acc + n, 0));
  let m = $state({ x: 0, y: 0 });
  let elapsed = $state(0);
  let interval = $state(1000);

  $effect(() => {
    const id = setInterval(() => {
      elapsed += interval;
    }, interval);
    return () => {
      clearInterval(id);
    };
  });

  function addNumber() {
    numbers.push(numbers.length + 1);
  }

  function onpointermove(event: any) {
    m.x = event.clientX;
    m.y = event.clientY;
  }
</script>

<main class="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-slate-50">
  <div class="mx-auto max-w-5xl px-4 pb-20 pt-10">

    <!-- HEADER / MODULE CARD -->
    <section
      class="relative mb-10 overflow-hidden rounded-2xl border border-emerald-500/40 bg-gradient-to-br from-emerald-950/80 via-slate-950 to-black/90 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-sm">
      <div class="pointer-events-none absolute -inset-8 -z-10 rounded-[32px] bg-emerald-500/20 blur-3xl" />

      <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div
            class="mb-2 inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-black/60 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-300/80">
            <span class="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Module 01 · Reactivity</span>
          </div>

          <h1
            class="bg-gradient-to-r from-emerald-300 via-slate-100 to-emerald-400 bg-clip-text text-4xl font-black text-transparent md:text-5xl">
            Reactivity in Svelte
          </h1>

          <p class="mt-3 max-w-xl text-sm text-emerald-100/80 md:text-base">
            Experiment with counters, derived values, pointer tracking, and time-based updates to see
            how Svelte’s reactivity responds to changes.
          </p>
        </div>

        <div class="mt-2 text-xs font-mono text-emerald-300/80 md:mt-0">
          <span class="text-emerald-400">&gt;</span> focus: assignment is reactivity
        </div>
      </div>
    </section>

    <!-- GRID OF LAB CARDS -->
    <section class="grid gap-6 md:grid-cols-2">

      <!-- Counters -->
      <div
        class="rounded-2xl border border-emerald-600/30 bg-black/70 p-5 shadow-[0_14px_40px_rgba(0,0,0,0.75)]">
        <header class="mb-4">
          <h2 class="text-lg font-semibold text-emerald-100">Reactive counters</h2>
          <p class="mt-1 text-xs text-slate-300">
            Multiple instances share the same component logic but keep their own state.
          </p>
        </header>

        <div class="flex flex-wrap gap-3">
          <Counter />
          <Counter />
          <Counter />
          <Counter />
        </div>
      </div>

      <!-- Numbers + derived total -->
      <div
        class="rounded-2xl border border-emerald-600/30 bg-black/70 p-5 shadow-[0_14px_40px_rgba(0,0,0,0.75)]">
        <header class="mb-4">
          <h2 class="text-lg font-semibold text-emerald-100">Derived values</h2>
          <p class="mt-1 text-xs text-slate-300">
            When the array changes, the total recomputes automatically via <span class="font-mono">$derived</span>.
          </p>
        </header>

        <button
          class="mb-3 inline-flex items-center justify-center rounded-lg border border-emerald-500/60 bg-emerald-500/10 px-3 py-1.5 text-xs font-mono uppercase tracking-[0.16em] text-emerald-200 transition hover:bg-emerald-500/20"
          onclick={addNumber}>
          <span class="mr-1 text-emerald-400">+</span> Add a number
        </button>

        <p class="font-mono text-emerald-100">
          {numbers.join(" + ")} <span class="text-emerald-400">=</span> {total}
        </p>
      </div>

      <!-- Pointer tracking -->
      <div
        class="rounded-2xl border border-emerald-600/30 bg-black/70 p-5 shadow-[0_14px_40px_rgba(0,0,0,0.75)]">
        <header class="mb-4">
          <h2 class="text-lg font-semibold text-emerald-100">Reactive pointer tracking</h2>
          <p class="mt-1 text-xs text-slate-300">
            Move your cursor inside the panel. The coordinates update reactively on every pointer move.
          </p>
        </header>

        <div
          class="flex h-64 w-full items-center justify-center rounded-xl border border-emerald-700/40 bg-gradient-to-br from-slate-950 via-emerald-950/30 to-black text-sm text-emerald-100"
          {onpointermove}>
          <span class="font-mono">
            x: {Math.round(m.x)} · y: {Math.round(m.y)}
          </span>
        </div>
      </div>

      <!-- Interval + elapsed time -->
      <div
        class="rounded-2xl border border-emerald-600/30 bg-black/70 p-5 shadow-[0_14px_40px_rgba(0,0,0,0.75)]">
        <header class="mb-4">
          <h2 class="text-lg font-semibold text-emerald-100">Reactive intervals</h2>
          <p class="mt-1 text-xs text-slate-300">
            Change the interval and watch how the elapsed time picks up the new timing reactively.
          </p>
        </header>

        <div class="mb-4 flex flex-wrap gap-3">
          <button
            class="inline-flex items-center justify-center rounded-lg border border-emerald-500/60 bg-emerald-500/10 px-3 py-1.5 text-xs font-mono uppercase tracking-[0.16em] text-emerald-200 transition hover:bg-emerald-500/20"
            onclick={() => (interval /= 2)}>
            ⏩ speed up
          </button>
          <button
            class="inline-flex items-center justify-center rounded-lg border border-emerald-500/60 bg-emerald-500/10 px-3 py-1.5 text-xs font-mono uppercase tracking-[0.16em] text-emerald-200 transition hover:bg-emerald-500/20"
            onclick={() => (interval *= 2)}>
            🐢 slow down
          </button>
        </div>

        <p class="font-mono text-sm text-emerald-100">
          interval: <span class="text-emerald-300">{interval}</span> ms
        </p>
        <p class="mt-1 font-mono text-sm text-emerald-100">
          elapsed: <span class="text-emerald-300">{elapsed}</span> ms
        </p>
      </div>
    </section>

    <!-- FOOTER NAV / SUMMARY -->
    <section
      class="mt-10 rounded-2xl border border-emerald-600/40 bg-gradient-to-r from-slate-950 via-emerald-950/40 to-slate-950 px-6 py-5 text-sm text-slate-300">
      <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p class="font-mono text-xs uppercase tracking-[0.18em] text-emerald-300">
            Reactivity takeaway
          </p>
          <p class="mt-1 text-slate-200">
            In Svelte, <span class="text-emerald-300">assignment is the signal</span>. Whenever you assign
            to a state value, everything that depends on it updates—no manual subscriptions needed.
          </p>
        </div>
        <div class="mt-2 text-xs text-emerald-300/90 md:mt-0">
          <span class="text-emerald-400">&gt;</span> Next module:
          <a
            href="/tutorials/props"
            class="ml-1 underline decoration-emerald-400/60 underline-offset-4 hover:decoration-emerald-300">
            Props & component communication
          </a>
        </div>
      </div>
    </section>
  </div>
</main>
