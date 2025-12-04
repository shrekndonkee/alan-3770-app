<script lang="ts">
  import { onMount } from 'svelte';

  let src = 'dog.jpg';
  let heroElement: HTMLElement;
  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<main class="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-slate-50">
  <section
    bind:this={heroElement}
    class="relative flex min-h-[calc(100vh-120px)] items-center justify-center overflow-hidden px-4 py-12"
  >
    <!-- big soft glow -->
    <div class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.25),_transparent_55%)]" />

    <!-- hero card -->
    <div
      class="relative mx-auto flex w-full max-w-5xl items-stretch overflow-hidden rounded-3xl border border-emerald-500/50 bg-gradient-to-br from-emerald-950/70 via-slate-950 to-black/90 p-6 shadow-[0_28px_80px_rgba(0,0,0,0.95)] md:p-8"
    >
      <!-- inner glow -->
      <div class="pointer-events-none absolute -inset-10 -z-10 rounded-[32px] bg-emerald-500/25 blur-3xl" />

      <div class="grid w-full gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
        <!-- LEFT: text / CTAs -->
        <div class="space-y-6 md:space-y-7">
          <!-- top pill -->
          <div
            class="inline-flex items-center gap-2 rounded-full border border-emerald-500/50 bg-black/60 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.22em] text-emerald-300"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Tutorial hub · Svelte labs</span>
          </div>

          <!-- heading -->
          <div>
            <h1
              class="bg-gradient-to-r from-emerald-300 via-slate-50 to-emerald-400 bg-clip-text text-3xl font-black text-transparent sm:text-4xl md:text-5xl"
            >
              Choose your next training module.
            </h1>
            <p class="mt-3 max-w-xl text-sm text-emerald-100/80 md:text-base">
              This hub routes you into focused Svelte labs — reactivity, props, logic, events, bindings,
              motion, and more. Each module is hands-on and terminal-styled to match the rest of the
              system.
            </p>
          </div>

          <!-- CTAs -->
          <div class="flex flex-wrap gap-3">
            <a
              href="/tutorials/reactivity"
              class="inline-flex items-center gap-2 rounded-xl border border-emerald-400/70 bg-emerald-500/15 px-4 py-2 text-xs font-mono uppercase tracking-[0.18em] text-emerald-100 transition hover:border-emerald-300 hover:bg-emerald-500/25 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] active:scale-[0.97]"
            >
              <span>▶</span>
              <span>Begin with reactivity</span>
            </a>

            <a
              href="/tutorials"
              class="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-black/60 px-4 py-2 text-xs font-mono uppercase tracking-[0.18em] text-slate-200 transition hover:border-emerald-300 hover:bg-slate-900/80 active:scale-[0.97]"
            >
              <span>▣</span>
              <span>View all modules</span>
            </a>
          </div>

          <!-- feature tags -->
          <div class="flex flex-wrap gap-2 pt-1">
            <span
              class="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-mono text-emerald-200"
            >
              ⚡ reactive patterns
            </span>
            <span
              class="rounded-full border border-slate-600/60 bg-slate-900/80 px-3 py-1 text-[11px] font-mono text-slate-200"
            >
              🎯 component communication
            </span>
            <span
              class="rounded-full border border-emerald-700/50 bg-emerald-700/10 px-3 py-1 text-[11px] font-mono text-emerald-300"
            >
              🛰 dynamic routes & motion
            </span>
          </div>
        </div>

        <!-- RIGHT: dog image card -->
        <div class="mt-4 md:mt-0">
          <div class="relative group mx-auto max-w-xs">
            <!-- glow backplate -->
            <div
              class="absolute -inset-4 rounded-3xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-lime-500 opacity-40 blur-xl transition-opacity duration-500 group-hover:opacity-70"
            />

            <div
              class="relative overflow-hidden rounded-3xl border border-emerald-500/40 bg-black/70 p-4 backdrop-blur-sm"
            >
              <img
                {src}
                alt="Dog - training mascot"
                class="mx-auto h-60 w-full max-w-[260px] rounded-2xl object-cover shadow-[0_18px_45px_rgba(0,0,0,0.9)] transition-transform duration-500 group-hover:scale-105"
                class:animate-pulse={!mounted}
              />

              <div class="mt-3 text-center text-[11px] font-mono text-emerald-200/80">
                <span class="text-emerald-300">assistant.dog</span> · training companion online
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
