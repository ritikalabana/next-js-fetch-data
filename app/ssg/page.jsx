export default async function SSG() {
  const res = await fetch("https://dummyjson.com/products", {
    cache: "force-cache", // builds at build time
  });
  const data = await res.json();

  console.log("SSG Data:", data); // → server console (terminal)
  return (
    <div>
      <h1>SSG - Static Site Generation</h1>
      {data.products.map(p => (
        <div key={p.id}>{p.title} - ${p.price}</div>
      ))}
    </div>
  );
}
