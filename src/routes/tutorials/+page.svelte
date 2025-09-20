<script lang="ts">
  import BigIntro from "$lib/components/BigIntro.svelte";
  let src= "dog.jpg"
  let contentMessage = `This is the tutorial <strong>page content</strong> It can include HTML tags.`
</script>
<h1 class="text-2xl">Welcome to the tutorial page!</h1>
<BigIntro/>
<p>{@html contentMessage}</p>
<img {src} alt="dog" class="mx-auto mt-4" />