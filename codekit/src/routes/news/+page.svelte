<script>
    export let data
    const { movies } = data

</script>

<h1>News</h1>
{#each movies as movie}
    <div>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
    </div>
{/each}