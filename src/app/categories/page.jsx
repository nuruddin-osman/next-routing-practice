// app/categories/page.js
export default function CategoriesPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">All Categories</h1>
      <ul className="space-y-2">
        <li className="text-lg hover:text-blue-500">Electronics</li>
        <li className="text-lg hover:text-blue-500">Clothing</li>
        <li className="text-lg hover:text-blue-500">Home & Kitchen</li>
      </ul>
    </div>
  );
}
