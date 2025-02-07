// app/products/page.js
import Link from "next/link";

const products = [
  { id: 1, name: "Laptop 1", slug: "laptop-1" },
  { id: 2, name: "Laptop 2", slug: "laptop-2" },
  { id: 3, name: "Laptop 3", slug: "laptop-3" },
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Laptop Products</h1>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id}>
            <Link
              href={`/products/${product.slug}`}
              className="text-lg text-blue-500 hover:underline"
            >
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
