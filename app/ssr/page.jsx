export default async function SSR() {
  const res = await fetch("https://dummyjson.com/products", {
    cache: "no-store", // ensures SSR every request
  });
  const data = await res.json();

  console.log("SSR Data:", data); // ✅ will appear in **terminal**, not browser
  return (
    <div style={{ padding: "20px" }}>
      <h1>SSR - Server Side Rendering</h1>
      {data.products.map(p => (
        <div key={p.id}>
          <strong>{p.title}</strong> - ${p.price}
        </div>
      ))}
    </div>
  );
}
