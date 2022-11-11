<script>
	import '../app.postcss';
</script>

<main>
	<nav>
        <div class="navbar bg-secondary text-secondary-content">
            <a href="/" class="btn btn-ghost normal-case text-xl">Home</a>
            <a href="/about" class="btn btn-ghost normal-case text-xl">About</a>
            <a href="/news" class="btn btn-ghost normal-case text-xl">News</a>
            <a href="/store" class="btn btn-ghost normal-case text-xl">Store</a>
          </div>
	</nav>

	<slot />
</main>

<style>
	@import 'https://unpkg.com/open-props';
</style>
