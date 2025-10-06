export default async function ISR() {
  const res = await fetch("https://dummyjson.com/products", {
    next: { revalidate: 10 }, 
  });
  const data = await res.json();

  console.log("ISR Data (server):", data); 
  return (
    <div style={{ padding: "20px" }}>
      <h1>ISR - Incremental Static Regeneration</h1>
      {data.products.map((p) => (
        <div key={p.id}>
          <strong>{p.title}</strong> - ${p.price}
        </div>
      ))}
    </div>
  );
}
