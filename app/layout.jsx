export const metadata = {
  title: "App Router Rendering Demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-6">
        <nav className="flex gap-12 mb-6 bg-blue-100 p-4 rounded font-semibold">
          <a href="/csr" className="hover:text-blue-700">CSR</a>
          <a href="/ssr" className="hover:text-blue-700">SSR</a>
          <a href="/ssg" className="hover:text-blue-700">SSG</a>
          <a href="/isr" className="hover:text-blue-700">ISR</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
