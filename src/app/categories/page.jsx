import Link from "next/link";

// app/categories/page.js
export default function CategoriesPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">All Categories</h1>
      <ul className="space-y-2">
        <Link
          href={`/categories/electronics`}
          className="text-lg hover:text-blue-500"
        >
          Electronics
        </Link>
        <Link
          href="/categories/clothing"
          className="text-lg hover:text-blue-500"
        >
          Clothing
        </Link>
        <Link
          href="/categories/kitchen"
          className="text-lg hover:text-blue-500"
        >
          Home & Kitchen
        </Link>
      </ul>
    </div>
  );
}
