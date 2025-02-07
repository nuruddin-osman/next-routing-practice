// app/page.js
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to Our E-Commerce Store!
      </h1>
      <div className="space-y-2">
        <Link
          href="/categories"
          className="text-lg text-blue-500 hover:underline"
        >
          Browse Categories
        </Link>
        <br />
        <Link
          href="/products"
          className="text-lg text-blue-500 hover:underline"
        >
          Browse Products
        </Link>
      </div>
    </div>
  );
}
