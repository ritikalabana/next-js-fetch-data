// pages/products.js
function ProductsPage({ products }) {
  console.log('ISR Rendered Products:', products); // Log during build/revalidation

  return (
    <div>
      <h1>ISR Products (Pages Router)</h1>
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
  console.log('ISR Fetched Products:', data.products); // Log during build/revalidation
  return {
    props: { products: data.products },
    revalidate: 60,
  };
}

export default ProductsPage;