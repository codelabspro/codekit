<script>
    export let data
    const { movies } = data

</script>

{#each movies as movie}
    <div class="card w-96 glass">
        <figure><img src="https://image.tmdb.org/t/p/original/{movie.poster_path}" alt="car!"/></figure>
        <div class="card-body">
          <h2 class="card-title">{movie.title}</h2>
          <p>{movie.overview}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">{movie.vote_count}</button>
          </div>
        </div>
    </div>
    <div class="divider"></div> 
{/each}