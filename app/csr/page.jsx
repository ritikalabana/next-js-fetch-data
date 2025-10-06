"use client";
import { useEffect, useState } from "react";

export default function CSR() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        console.log("CSR Data:", data); // ✅ will show in browser console
        setProducts(data.products);
      });
  }, []);

  return (
    <div>
      <h1>CSR - Client Side Rendering</h1>
      {products.map(p => (
        <div key={p.id}>{p.title} - ${p.price}</div>
      ))}
    </div>
  );
}
