<script lang="ts">
    // REAL props example
    import Child from '$lib/components/Child.svelte';
    import CodeBlock from '$lib/components/CodeBlock/CodeBlock.svelte';
    let name = 'Svelte';

    const exampleHtml = `<${'script'} lang='ts'>
  let { name = 'Alan' } = $props()
</${'script'}>
<p>Hello {name}!</p>`;
</script>

<main class="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-slate-50">
  <div class="mx-auto max-w-5xl px-4 pb-20 pt-10">

    <!-- HEADER / MODULE CARD -->
    <section
      class="relative mb-10 overflow-hidden rounded-2xl border border-sky-500/40 bg-gradient-to-br from-sky-950/80 via-slate-950 to-black/90 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-sm">

      <div class="pointer-events-none absolute -inset-8 -z-10 rounded-[32px] bg-sky-500/20 blur-3xl" />

      <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div
            class="mb-2 inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-black/60 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-sky-300/80">
            <span class="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
            <span>Module 02 · Props</span>
          </div>

          <h1
            class="bg-gradient-to-r from-sky-300 via-slate-100 to-sky-400 bg-clip-text text-4xl font-black text-transparent md:text-5xl">
            Passing Props in Svelte
          </h1>

          <p class="mt-3 max-w-xl text-sm text-sky-100/80 md:text-base">
            Props allow a parent component to pass data into a child component — making your UI modular and reusable.
          </p>
        </div>

        <div class="mt-2 text-xs font-mono text-sky-300/80 md:mt-0">
          <span class="text-sky-400">&gt;</span> focus: one-way data flow
        </div>
      </div>
    </section>

    <!-- GRID OF LAB CARDS -->
    <section class="grid gap-6 md:grid-cols-2">

      <!-- Example Block #1: What Props Are -->
      <div class="rounded-2xl border border-sky-600/30 bg-black/70 p-5 shadow-[0_14px_40px_rgba(0,0,0,0.75)]">
        <header class="mb-4">
          <h2 class="text-lg font-semibold text-sky-100">What are props?</h2>
          <p class="mt-1 text-xs text-slate-300">
            Props let a parent send data down into a child component. The child receives them using <span class="font-mono">export let</span>.
          </p>
        </header>

        <p class="text-sm text-slate-300 mb-3">
          Here is an example of a child component receiving a <span class="font-mono">name</span> prop:
        </p>

        <CodeBlock code={exampleHtml} lang="html" />
      </div>

      <!-- Example Block #2: Live Child Component -->
      <div class="rounded-2xl border border-sky-600/30 bg-black/70 p-5 shadow-[0_14px_40px_rgba(0,0,0,0.75)]">
        <header class="mb-4">
          <h2 class="text-lg font-semibold text-sky-100">Live Props Example</h2>
          <p class="mt-1 text-xs text-slate-300">
            Below, the child component receives the <span class="font-mono">name</span> prop. Try changing it!
          </p>
        </header>

        <div class="flex flex-col gap-3">
          <input
            class="rounded-lg border border-sky-700/40 bg-slate-900/60 px-3 py-2 font-mono text-sky-200 focus:border-sky-400 focus:outline-none"
            bind:value={name}
          />

          <Child {name} />

          <p class="text-xs text-slate-400">
            If no prop is passed, the default value ("Alan") is used:
          </p>

          <div class="rounded-lg border border-sky-700/40 bg-sky-900/20 p-3">
            <Child />
          </div>
        </div>
      </div>

      <!-- Example Block #3: Derived Prop Example -->
      <div class="rounded-2xl border border-sky-600/30 bg-black/70 p-5 shadow-[0_14px_40px_rgba(0,0,0,0.75)]">
        <header class="mb-4">
          <h2 class="text-lg font-semibold text-sky-100">Reactivity + Props</h2>
          <p class="mt-1 text-xs text-slate-300">
            Props can reflect reactive state in the parent. When the value changes, the child updates automatically.
          </p>
        </header>

        <input
          type="range"
          min="1"
          max="10"
          bind:value={name.length}
          class="w-full accent-sky-400"
        />

        <p class="text-sky-200 font-mono text-sm mt-2">
          name length: {name.length}
        </p>

        <div class="mt-4 rounded-lg border border-sky-700/40 bg-sky-900/20 p-3">
          <Child name={`Name length is ${name.length}`} />
        </div>
      </div>

      <!-- Example Block #4: NEW PROPS EXAMPLE -->
      <div class="rounded-2xl border border-sky-600/30 bg-black/70 p-5 shadow-[0_14px_40px_rgba(0,0,0,0.75)]">
        <header class="mb-4">
          <h2 class="text-lg font-semibold text-sky-100">Passing Multiple Props</h2>
          <p class="mt-1 text-xs text-slate-300">
            Components can receive more than one prop — just declare them with <span class="font-mono">export let</span>.
          </p>
        </header>

        <!-- Example UI -->
        <div class="rounded-xl border border-sky-700/40 bg-sky-900/20 p-4 font-mono text-sky-200">
          <p>&lt;Child name="Alan" level={5} /&gt;</p>
          <p class="mt-2 text-xs text-sky-300/70">Try adding your own props later!</p>
        </div>
      </div>

    </section>

    <!-- FOOTER NAV / SUMMARY -->
    <section
      class="mt-10 rounded-2xl border border-sky-600/40 bg-gradient-to-r from-slate-950 via-sky-950/40 to-slate-950 px-6 py-5 text-sm text-slate-300">
      <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p class="font-mono text-xs uppercase tracking-[0.18em] text-sky-300">
            Props takeaway
          </p>
          <p class="mt-1 text-slate-200">
            Props flow <span class="text-sky-300">downward</span>. Parents own the state; children receive it.
            This ensures predictable, stable UI behavior.
          </p>
        </div>
        <div class="mt-2 text-xs text-sky-300/90 md:mt-0">
          <span class="text-sky-400">&gt;</span> Next module:
          <a
            href="/tutorials/logic"
            class="ml-1 underline decoration-sky-400/60 underline-offset-4 hover:decoration-sky-300">
            Logic & Conditional Rendering
          </a>
        </div>
      </div>
    </section>
  </div>
</main>
