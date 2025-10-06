// pages/products.js
function ProductsPage({ products }) {
  console.log('SSR Rendered Products:', products); // Log in server console during render

  return (
    <div>
      <h1>SSR Products (Pages Router)</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  console.log('SSR Fetched Products:', data.products); // Log in server console during fetch
  return { props: { products: data.products } };
}

export default ProductsPage;