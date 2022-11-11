<script>
    export let data;
    const { products } = data;
</script>
{#each products as product}
    <div class="card w-96 glass">
        <figure><img src="{product.thumbnail}" alt="car!"/></figure>
        <div class="card-body">
          <h2 class="card-title">{product.title}</h2>
          <p>{product.description}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">$ {product.price}</button>
          </div>
        </div>
      </div>
    <div class="divider"></div> 
{/each}