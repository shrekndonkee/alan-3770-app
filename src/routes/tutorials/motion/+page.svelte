<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  import { fade, fly, slide, scale } from 'svelte/transition'
  import { tweened, spring } from 'svelte/motion'
  import { cubicInOut, backOut } from 'svelte/easing'
  import { flip } from 'svelte/animate'

  // ────────────────────────────────────────────────────────────
  // Simulated “API” data stream
  // ────────────────────────────────────────────────────────────
  type ApiTick = {
    load: number
    point: { x: number; y: number }
    event?: string
    leaderboardDelta?: Array<{ id: number; score: number }>
  }

  let polling = false
  let timer: number | undefined

  // 1) TWEENED gauge updated by incoming data
  const loadPct = tweened(0, { duration: 350, easing: cubicInOut })

  // 2) SPRING dot follows incoming coordinates
  const dot = spring({ x: 40, y: 40 }, { stiffness: 0.08, damping: 0.25 })
  let stiffness = dot.stiffness
  let damping = dot.damping
  $: dot.stiffness = stiffness
  $: dot.damping = damping

  // 3) Notifications
  type Notice = { id: number; text: string }
  let notices: Notice[] = []
  let noticeId = 1
  function pushNotice(text: string) {
    const id = noticeId++
    notices = [{ id, text }, ...notices].slice(0, 5)
    setTimeout(() => {
      notices = notices.filter(n => n.id !== id)
    }, 4000)
  }

  // 4) Leaderboard with animate:flip
  type Player = { id: number; name: string; score: number }
  let players: Player[] = [
    { id: 1, name: 'Luna', score: 72 },
    { id: 2, name: 'Kai', score: 65 },
    { id: 3, name: 'Mira', score: 58 },
    { id: 4, name: 'Jax', score: 49 }
  ]

  function applyLeaderboardDelta(deltas: Array<{ id: number; score: number }>) {
    players = players
      .map(p => {
        const d = deltas.find(x => x.id === p.id)
        return d ? { ...p, score: Math.max(0, Math.min(100, p.score + d.score)) } : p
      })
      .sort((a, b) => b.score - a.score)
  }

  // 5) Loading banner
  let loading = true

  // Start/stop fake feed
  onMount(() => {
    polling = true
    loading = true

    const start = setTimeout(() => {
      loading = false
      timer = window.setInterval(() => {
        const tick: ApiTick = {
          load: Math.round(10 + Math.random() * 85),
          point: { x: Math.round(10 + Math.random() * 180), y: Math.round(10 + Math.random() * 120) },
          event: Math.random() < 0.55 ? sampleEvent() : undefined,
          leaderboardDelta: Math.random() < 0.8 ? sampleDeltas() : undefined
        }
        onData(tick)
      }, 1400)
    }, 900) as unknown as number

    return () => clearTimeout(start)
  })

  onDestroy(() => {
    if (timer) clearInterval(timer)
    polling = false
  })

  function onData(tick: ApiTick) {
    loadPct.set(tick.load)
    dot.set({ x: tick.point.x, y: tick.point.y })
    if (tick.event) pushNotice(tick.event)
    if (tick.leaderboardDelta) applyLeaderboardDelta(tick.leaderboardDelta)
  }

  const eventPhrases = [
    'New user signed up',
    'Webhook delivered',
    'Cache warmed',
    'Job completed',
    'Payment processed',
    'Delta sync finished'
  ]
  function sampleEvent() {
    return eventPhrases[Math.floor(Math.random() * eventPhrases.length)]
  }
  function sampleDeltas() {
    const bump = () => (Math.random() < 0.5 ? 1 : -1) * Math.ceil(Math.random() * 8)
    return [
      { id: 1 + Math.floor(Math.random() * 4), score: bump() },
      { id: 1 + Math.floor(Math.random() * 4), score: bump() }
    ]
  }

  let showGauge = true
  let showMap = true
  let showNotices = true
</script>

<style>
  .card {
    border-radius: 1rem;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
    background: white;
  }
  .ring {
    width: 180px;
    height: 180px;
    border-radius: 9999px;
    background: conic-gradient(var(--fg) var(--pct), #e5e7eb 0);
    position: relative;
  }
  .ring::after {
    content: '';
    position: absolute;
    inset: 16px;
    border-radius: 9999px;
    background: white;
  }
</style>

<div class="mx-auto max-w-6xl p-6 space-y-10">
  <header class="space-y-1">
    <h1 class="text-3xl font-extrabold">Motion • Live Data + Transitions</h1>
    <p class="text-gray-600">
      Tween & spring from incoming data, transition multiple UI elements, and animate list reorders.
    </p>
  </header>

  {#if loading}
    <div class="card border p-3 grid place-items-center" in:scale={{ duration: 180 }} out:fade>
      <span class="text-sm text-gray-600">Connecting to data…</span>
    </div>
  {/if}

  <div class="flex flex-wrap gap-2">
    <button class="border rounded px-3 py-1" on:click={() => (showGauge = !showGauge)}>
      {showGauge ? 'Hide' : 'Show'} Gauge
    </button>
    <button class="border rounded px-3 py-1" on:click={() => (showMap = !showMap)}>
      {showMap ? 'Hide' : 'Show'} Spring Map
    </button>
    <button class="border rounded px-3 py-1" on:click={() => (showNotices = !showNotices)}>
      {showNotices ? 'Hide' : 'Show'} Notices
    </button>
  </div>

  <div class="grid lg:grid-cols-3 gap-6">
    <!-- A: Tweened Gauge -->
    {#if showGauge}
      <section class="card border p-5 space-y-4" in:slide out:slide>
        <h2 class="text-lg font-bold">Live Load (tweened)</h2>

        <div
          class="ring mx-auto"
          style={`--pct: ${$loadPct}%; --fg: ${
            $loadPct > 75 ? '#ef4444' : $loadPct > 50 ? '#f59e0b' : '#22c55e'
          }`}
        ></div>

        <div class="text-center">
          <div class="text-4xl font-extrabold tabular-nums">{$loadPct.toFixed(0)}%</div>
          <div class="text-xs text-gray-500">
            tweened(&#123; duration: 350, cubicInOut &#125;)
          </div>
        </div>

        <div class="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
          <div class="h-full" style={`background:#3b82f6;width:${$loadPct}%`}></div>
        </div>
      </section>
    {/if}

    <!-- B: Spring Dot Map -->
    {#if showMap}
      <section class="card border p-5 space-y-4" in:slide out:slide>
        <h2 class="text-lg font-bold">Position (spring)</h2>
        <div class="text-xs text-gray-500">
          stiffness {stiffness.toFixed(2)} / damping {damping.toFixed(2)}
        </div>

        <div class="relative border rounded-xl overflow-hidden" style="height:160px;">
          <svg viewBox="0 0 200 140" class="absolute inset-0 h-full w-full">
            <rect x="0" y="0" width="200" height="140" fill="#f3f4f6" />
            <!-- PATCHED HERE -->
            <circle cx={$dot.x} cy={$dot.y} r="6" fill="#3b82f6" />
          </svg>
        </div>

        <div class="flex items-center gap-4">
          <label class="text-sm"
            >stiffness
            <input
              class="w-36"
              type="range"
              min="0.02"
              max="0.3"
              step="0.01"
              bind:value={stiffness}
            />
          </label>
          <label class="text-sm"
            >damping
            <input
              class="w-36"
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
    <section class="card border p-5 space-y-5" in:slide out:slide>
      <h2 class="text-lg font-bold">Events & Leaderboard</h2>

      {#if showNotices}
        <div class="space-y-2">
          {#each notices as n (n.id)}
            <div
              class="flex items-center justify-between rounded-lg border p-2 text-sm bg-white"
              in:fly={{ y: 10, duration: 180 }}
              out:fade>
              <span>{n.text}</span>
              <button
                class="text-gray-500 hover:text-gray-900"
                on:click={() => (notices = notices.filter(x => x.id !== n.id))}>×</button>
            </div>
          {/each}
          {#if notices.length === 0}
            <p class="text-xs text-gray-400" transition:fade>No recent events.</p>
          {/if}
        </div>
      {/if}

      <hr class="border-gray-200" />

      <ul class="space-y-2">
        {#each players as p (p.id)}
          <li
            class="rounded-lg border p-2 flex items-center justify-between select-none bg-white"
            animate:flip={{ duration: 250, easing: backOut } as any}>
            <div class="font-medium">{p.name}</div>
            <div class="flex items-center gap-3">
              <div class="text-sm text-gray-500 w-10 text-right tabular-nums">{p.score}</div>
              <div class="h-2 w-28 rounded bg-gray-200 overflow-hidden">
                <div class="h-full" style={`background:#10b981;width:${p.score}%`}></div>
              </div>
            </div>
          </li>
        {/each}
      </ul>
    </section>
  </div>
</div>
