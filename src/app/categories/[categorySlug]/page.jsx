// app/categories/[categorySlug]/page.js
export default function CategoryPage({ params }) {
  const { categorySlug } = params;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Category: {categorySlug}</h1>
      <p className="text-lg">
        Products under this category will be listed here.
      </p>
    </div>
  );
}
