<style>
    @import "https://unpkg.com/open-props";
</style>

<main>
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/store" data-sveltekit-prefetch>Store</a>
      </nav>
      
      <slot></slot>
</main>