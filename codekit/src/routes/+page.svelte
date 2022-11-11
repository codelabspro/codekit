<h1 class="text-4xl">Welcome to CodeKit</h1>
<p>The Meta Platform for Building Platforms</p>

<script>
    export let data;
    const { products } = data;
</script>
{#each products as product}
    <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>{product.price}</p>
    </div>
{/each}