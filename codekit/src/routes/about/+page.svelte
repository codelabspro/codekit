<script>
    export let data;
    const { products } = data;
</script>
<div class="flex h-screen">
    <div class="m-auto">
        {#each products as product}
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src="{product.thumbnail}" alt="{product.category}" /></figure>
                <div class="card-body">
                <h2 class="card-title">
                    {product.title}
                    <div class="badge badge-secondary">{product.price}</div>
                </h2>
                <p>{product.description}</p>
                <div class="card-actions justify-end">
                    <div class="badge badge-outline">{product.brand}</div> 
                    <div class="badge badge-outline">{product.category}</div>
                </div>
                </div>
            </div>
            <div class="divider"></div> 
        {/each}
    </div>
</div>