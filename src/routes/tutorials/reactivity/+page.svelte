<script lang="ts">
  let count = $state(0);
  let numbers = $state([1, 2, 3, 4]);
  let total = $derived(numbers.reduce((acc, n) => acc + n, 0))
  let m = $state({ x: 0, y: 0 });
  let elapsed = $state(0);
  let interval = $state(1000);

$effect(() =>{
  const id = setInterval(() => {
    elapsed += interval
  }, interval)
  return () => {clearInterval(id)}
})

  function increment() {
		count += 1;
	}

  function addNumber(){
    numbers.push(numbers.length + 1)
  }

  function onpointermove(event: any){
    m.x = event.clientX
    m.y = event.clientY
  }
</script>
  <div class="flex flex-col gap-4 justify-center items-center p-4">
<h1>Reactivity in Svelete</h1>
  <button class="btn preset-filled-primary-950-50" onclick={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>

<button class="btn preset-filled-secondary-950-50" onclick={addNumber}>
	Add a number
</button>

<p>{numbers.join(' + ')} = {total}</p>

<div class="bg-amber-100 w-96 h-96" {onpointermove}>
  The point is at {Math.round(m.x)} x {Math.round(m.y)}
</div>

<button class="btn preset-filled-tertiary-950-50" onclick={() => interval /= 2}>speed up</button>
<button class="btn preset-filled-tertiary-950-50" onclick={() => interval *= 2}>slow down</button>

<p>elapsed: {elapsed}</p>
</div>