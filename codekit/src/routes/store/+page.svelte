<script>
    export let data;
    const { products } = data;
</script>
<h1>Welcome to CodeKit Store</h1>
{#each products as product}
    <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>{product.price}</p>
    </div>
{/each}