// app/categories/[categorySlug]/[subCategorySlug]/[itemSlug]/page.js
export default function ItemPage({ params }) {
  const { categorySlug, subCategorySlug, itemSlug } = params;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Item: {itemSlug}</h1>
      <p className="text-lg">
        This item belongs to {subCategorySlug} under {categorySlug}.
      </p>
    </div>
  );
}
