// app/categories/[categorySlug]/[subCategorySlug]/page.js
export default function SubCategoryPage({ params }) {
  const { categorySlug, subCategorySlug } = params;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">
        Sub-Category: {subCategorySlug} (Under {categorySlug})
      </h1>
      <p className="text-lg">
        Products under this sub-category will be listed here.
      </p>
    </div>
  );
}
