<script lang="ts">
    // Demonstration of passing props in Svelte
    import Child from '$lib/components/Child.svelte';
    import CodeBlock from '$lib/components/CodeBlock/CodeBlock.svelte';

    let name = 'Svelte';

    const exampleHtml = `<${'script'} lang='ts'>

    let { name = 'Alan' } = $props()

</${'script'}>

<p>Hello {name}!</p>`;
    
</script>



<div class="flex flex-col items-center justify-center gap-4 p-4">
    <h1>Passing Props in Svelte</h1>
    <p>
        Props are a way to pass data from a parent component to a child component. In Svelte, props are
        declared using the <code>export</code> keyword.
    </p>
    <p>Here is an example of a child component</p>

<CodeBlock code={exampleHtml} lang="html" />

    <p>And here is the Child component that receives the prop:</p>
    <Child {name} />
    <p>If no prop is passed, the default value is used:</p>
    <Child />
</div>