<script>
	import '../app.postcss';
</script>

<main>
	<nav>
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/store" data-sveltekit-prefetch>Store</a>
		<a href="/news" data-sveltekit-prefetch>News</a>
	</nav>

	<slot />
</main>

<style>
	@import 'https://unpkg.com/open-props';
</style>
