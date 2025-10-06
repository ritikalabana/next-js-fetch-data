// pages/products.js
function ProductsPage({ products }) {
  console.log('SSG Rendered Products:', products); // Log during build

  return (
    <div>
      <h1>SSG Products (Pages Router)</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  console.log('SSG Fetched Products:', data.products); // Log during build
  return { props: { products: data.products } };
}

export default ProductsPage;