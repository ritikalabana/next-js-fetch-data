import { useState, useEffect } from 'react';

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        console.log('CSR Fetched Products:', data.products); // Log in browser console
        setProducts(data.products);
      });
  }, []);

  return (
    <div>
      <h1>CSR Products (Pages Router)</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;