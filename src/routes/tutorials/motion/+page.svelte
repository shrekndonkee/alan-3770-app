<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { fade, fly, slide, scale } from 'svelte/transition';
  import { tweened, spring } from 'svelte/motion';
  import { cubicInOut, backOut } from 'svelte/easing';
  import { flip } from 'svelte/animate';

  // ────────────────────────────────────────────────────────────
  // Simulated “API” data stream
  // ────────────────────────────────────────────────────────────
  type ApiTick = {
    load: number;
    point: { x: number; y: number };
    event?: string;
    leaderboardDelta?: Array<{ id: number; score: number }>;
  };

  let polling = false;
  let timer: number | undefined;

  // 1) TWEENED gauge updated by incoming data
  const loadPct = tweened(0, { duration: 350, easing: cubicInOut });

  // 2) SPRING dot follows incoming coordinates
  const dot = spring({ x: 40, y: 40 }, { stiffness: 0.08, damping: 0.25 });
  let stiffness = dot.stiffness;
  let damping = dot.damping;
  $: dot.stiffness = stiffness;
  $: dot.damping = damping;

  // 3) Notifications
  type Notice = { id: number; text: string };
  let notices: Notice[] = [];
  let noticeId = 1;
  function pushNotice(text: string) {
    const id = noticeId++;
    notices = [{ id, text }, ...notices].slice(0, 5);
    setTimeout(() => {
      notices = notices.filter((n) => n.id !== id);
    }, 4000);
  }

  // 4) Leaderboard with animate:flip
  type Player = { id: number; name: string; score: number };
  let players: Player[] = [
    { id: 1, name: 'Luna', score: 72 },
    { id: 2, name: 'Kai', score: 65 },
    { id: 3, name: 'Mira', score: 58 },
    { id: 4, name: 'Jax', score: 49 }
  ];

  function applyLeaderboardDelta(deltas: Array<{ id: number; score: number }>) {
    players = players
      .map((p) => {
        const d = deltas.find((x) => x.id === p.id);
        return d ? { ...p, score: Math.max(0, Math.min(100, p.score + d.score)) } : p;
      })
      .sort((a, b) => b.score - a.score);
  }

  // 5) Loading banner
  let loading = true;

  // Start/stop fake feed
  onMount(() => {
    polling = true;
    loading = true;

    const start = setTimeout(() => {
      loading = false;
      timer = window.setInterval(() => {
        const tick: ApiTick = {
          load: Math.round(10 + Math.random() * 85),
          point: {
            x: Math.round(10 + Math.random() * 180),
            y: Math.round(10 + Math.random() * 120)
          },
          event: Math.random() < 0.55 ? sampleEvent() : undefined,
          leaderboardDelta: Math.random() < 0.8 ? sampleDeltas() : undefined
        };
        onData(tick);
      }, 1400);
    }, 900) as unknown as number;

    return () => clearTimeout(start);
  });

  onDestroy(() => {
    if (timer) clearInterval(timer);
    polling = false;
  });

  function onData(tick: ApiTick) {
    loadPct.set(tick.load);
    dot.set({ x: tick.point.x, y: tick.point.y });
    if (tick.event) pushNotice(tick.event);
    if (tick.leaderboardDelta) applyLeaderboardDelta(tick.leaderboardDelta);
  }

  const eventPhrases = [
    'New user signed up',
    'Webhook delivered',
    'Cache warmed',
    'Job completed',
    'Payment processed',
    'Delta sync finished'
  ];
  function sampleEvent() {
    return eventPhrases[Math.floor(Math.random() * eventPhrases.length)];
  }
  function sampleDeltas() {
    const bump = () =>
      (Math.random() < 0.5 ? 1 : -1) * Math.ceil(Math.random() * 8);
    return [
      { id: 1 + Math.floor(Math.random() * 4), score: bump() },
      { id: 1 + Math.floor(Math.random() * 4), score: bump() }
    ];
  }

  let showGauge = true;
  let showMap = true;
  let showNotices = true;
</script>

<style>
  .ring {
    width: 180px;
    height: 180px;
    border-radius: 9999px;
    background: conic-gradient(var(--fg) var(--pct), #020617 0);
    position: relative;
  }
  .ring::after {
    content: '';
    position: absolute;
    inset: 16px;
    border-radius: 9999px;
    background: #020617;
  }
</style>

<main class="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-slate-50">
  <div class="mx-auto max-w-5xl px-4 pb-20 pt-10">
    <!-- HEADER / MODULE CARD -->
    <section
      class="relative mb-10 overflow-hidden rounded-2xl border border-cyan-500/40 bg-gradient-to-br from-cyan-950/80 via-slate-950 to-black/90 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-sm"
    >
      <div
        class="pointer-events-none absolute -inset-8 -z-10 rounded-[32px] bg-cyan-500/25 blur-3xl"
      />

      <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div
            class="mb-2 inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-black/60 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-cyan-300/80"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Module 07 · Motion</span>
          </div>

          <h1
            class="bg-gradient-to-r from-cyan-300 via-slate-100 to-cyan-400 bg-clip-text text-4xl font-black text-transparent md:text-5xl"
          >
            Motion & Live Data
          </h1>

          <p class="mt-3 max-w-xl text-sm text-cyan-100/80 md:text-base">
            Tween and spring from incoming data, transition panels in and out, and animate list
            reorders with <span class="text-cyan-300">tweened</span>, <span class="text-cyan-300">spring</span>, and
            <span class="text-cyan-300">animate:flip</span>.
          </p>
        </div>

        <div class="mt-2 text-xs font-mono text-cyan-300/80 md:mt-0">
          <span class="text-cyan-400">&gt;</span> focus: motion driven by real state
        </div>
      </div>
    </section>

    <!-- LOADING BANNER -->
    {#if loading}
      <div
        class="mb-6 rounded-2xl border border-cyan-600/40 bg-black/70 p-3 text-center text-sm text-slate-200 shadow-[0_16px_40px_rgba(0,0,0,0.7)]"
        in:scale={{ duration: 180 }}
        out:fade
      >
        Connecting to data…
      </div>
    {/if}

    <!-- TOGGLE CONTROLS -->
    <section
      class="mb-8 rounded-2xl border border-cyan-700/40 bg-black/70 p-4 text-xs text-slate-200 shadow-[0_16px_40px_rgba(0,0,0,0.7)]"
    >
      <p class="mb-3 font-mono uppercase tracking-[0.2em] text-cyan-300">
        View controls
      </p>
      <div class="flex flex-wrap gap-2">
        <button
          class="rounded-lg border border-slate-700 bg-slate-950 px-3 py-1 font-mono text-[11px] text-slate-100 transition hover:border-cyan-400 hover:bg-cyan-950/40"
          on:click={() => (showGauge = !showGauge)}
        >
          {showGauge ? 'Hide' : 'Show'} Gauge
        </button>
        <button
          class="rounded-lg border border-slate-700 bg-slate-950 px-3 py-1 font-mono text-[11px] text-slate-100 transition hover:border-cyan-400 hover:bg-cyan-950/40"
          on:click={() => (showMap = !showMap)}
        >
          {showMap ? 'Hide' : 'Show'} Spring Map
        </button>
        <button
          class="rounded-lg border border-slate-700 bg-slate-950 px-3 py-1 font-mono text-[11px] text-slate-100 transition hover:border-cyan-400 hover:bg-cyan-950/40"
          on:click={() => (showNotices = !showNotices)}
        >
          {showNotices ? 'Hide' : 'Show'} Notices
        </button>
      </div>
    </section>

    <!-- MAIN GRID -->
    <section class="grid gap-6 lg:grid-cols-3">
      <!-- A: Tweened Gauge -->
      {#if showGauge}
        <section
          class="rounded-2xl border border-cyan-600/40 bg-black/70 p-5 shadow-[0_14px_40px_rgba(0,0,0,0.75)]"
          in:slide
          out:slide
        >
          <h2 class="mb-1 text-lg font-semibold text-cyan-100">Live load (tweened)</h2>
          <p class="mb-4 text-xs text-slate-300">
            <span class="text-cyan-300">tweened</span> smoothly animates to each new load value.
          </p>

          <div
            class="ring mx-auto"
            style={`--pct:${$loadPct}%; --fg:${
              $loadPct > 75 ? '#22d3ee' : $loadPct > 50 ? '#38bdf8' : '#22c55e'
            }`}
          ></div>

          <div class="mt-4 text-center">
            <div class="text-4xl font-extrabold tabular-nums text-cyan-100">
              {$loadPct.toFixed(0)}%
            </div>
            <div class="text-xs text-slate-400">
              tweened(&#123; duration: 350, easing: cubicInOut &#125;)
            </div>
          </div>

          <div class="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-900">
            <div
              class="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400"
              style={`width:${$loadPct}%`}
            ></div>
          </div>
        </section>
      {/if}

      <!-- B: Spring Dot Map -->
      {#if showMap}
        <section
          class="rounded-2xl border border-cyan-600/40 bg-black/70 p-5 shadow-[0_14px_40px_rgba(0,0,0,0.75)]"
          in:slide
          out:slide
        >
          <h2 class="mb-1 text-lg font-semibold text-cyan-100">Position (spring)</h2>
          <p class="mb-3 text-xs text-slate-300">
            <span class="text-cyan-300">spring</span> makes the dot ease into each new coordinate.
          </p>
          <div class="mb-3 text-xs text-slate-400">
            stiffness {stiffness.toFixed(2)} / damping {damping.toFixed(2)}
          </div>

          <div
            class="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900"
            style="height:160px;"
          >
            <svg viewBox="0 0 200 140" class="absolute inset-0 h-full w-full">
              <rect x="0" y="0" width="200" height="140" fill="#020617" />
              <circle cx={$dot.x} cy={$dot.y} r="6" fill="#22d3ee" />
            </svg>
          </div>

          <div class="mt-4 flex flex-col gap-3 text-xs text-slate-200">
            <label class="flex flex-col gap-1">
              <span>stiffness</span>
              <input
                class="w-full accent-cyan-400"
                type="range"
                min="0.02"
                max="0.3"
                step="0.01"
                bind:value={stiffness}
              />
            </label>
            <label class="flex flex-col gap-1">
              <span>damping</span>
              <input
                class="w-full accent-cyan-400"
                type="range"
                min="0.05"
                max="0.8"
                step="0.01"
                bind:value={damping}
              />
            </label>
          </div>
        </section>
      {/if}

      <!-- C: Notices + Leaderboard -->
      <section
        class="rounded-2xl border border-cyan-600/40 bg-black/70 p-5 shadow-[0_14px_40px_rgba(0,0,0,0.75)]"
        in:slide
        out:slide
      >
        <h2 class="mb-1 text-lg font-semibold text-cyan-100">Events & leaderboard</h2>
        <p class="mb-4 text-xs text-slate-300">
          Incoming events fade and fly in, while the leaderboard reorders with
          <span class="text-cyan-300">animate:flip</span>.
        </p>

        {#if showNotices}
          <div class="mb-4 space-y-2">
            {#each notices as n (n.id)}
              <div
                class="flex items-center justify-between rounded-lg border border-cyan-700/40 bg-slate-950 px-3 py-2 text-xs text-slate-100"
                in:fly={{ y: 10, duration: 180 }}
                out:fade
              >
                <span>{n.text}</span>
                <button
                  class="text-slate-500 hover:text-slate-200"
                  on:click={() => (notices = notices.filter((x) => x.id !== n.id))}
                >
                  ×
                </button>
              </div>
            {/each}
            {#if notices.length === 0}
              <p class="text-[11px] text-slate-500" transition:fade>
                No recent events.
              </p>
            {/if}
          </div>
        {/if}

        <hr class="mb-4 border-slate-800" />

        <ul class="space-y-2">
          {#each players as p (p.id)}
            <li
              class="flex select-none items-center justify-between rounded-lg border border-slate-800 bg-slate-950 px-3 py-2"
              animate:flip={{ duration: 250, easing: backOut } as any}
            >
              <div class="font-medium text-slate-100">{p.name}</div>
              <div class="flex items-center gap-3">
                <div class="w-10 text-right text-sm tabular-nums text-slate-300">
                  {p.score}
                </div>
                <div class="h-2 w-28 overflow-hidden rounded bg-slate-800">
                  <div
                    class="h-full rounded bg-emerald-400"
                    style={`width:${p.score}%`}
                  ></div>
                </div>
              </div>
            </li>
          {/each}
        </ul>
      </section>
    </section>

    <!-- FOOTER SUMMARY -->
    <section
      class="mt-10 rounded-2xl border border-cyan-600/40 bg-gradient-to-r from-slate-950 via-cyan-950/40 to-slate-950 px-6 py-5 text-sm text-slate-300"
    >
      <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p class="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">
            Motion takeaway
          </p>
          <p class="mt-1 text-slate-200">
            Instead of manually animating DOM nodes, connect Svelte’s motion primitives to your
            real state. When the data moves, the UI glides along with it.
          </p>
        </div>
        <div class="mt-2 text-xs text-cyan-300/90 md:mt-0">
          <span class="text-cyan-400">&gt;</span> Back to:
          <a
            href="/tutorials"
            class="ml-1 underline decoration-cyan-400/60 underline-offset-4 hover:decoration-cyan-300"
          >
            Module overview
          </a>
        </div>
      </div>
    </section>
  </div>
</main>
