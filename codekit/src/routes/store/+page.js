export const load = async ({ fetch }) => {
    const productResponse = await fetch('https://dummyjson.com/products?limit=20');
    const productData = await productResponse.json()
    const products = productData.products;
    return {
        products: products
    }
}