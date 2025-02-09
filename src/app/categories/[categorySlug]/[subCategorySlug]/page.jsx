"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

// app/categories/[categorySlug]/[subCategorySlug]/page.js
export default function SubCategoryPage() {
  const params = useParams();
  const { categorySlug, subCategorySlug } = params;
  const fullPath = `/categories/${categorySlug}/${subCategorySlug}/tablet`;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">
        Sub-Category: {subCategorySlug} (Under {categorySlug})
      </h1>
      <p className="text-lg">
        Products under this sub-category will be listed here.
      </p>
      <Link href={fullPath}>Tablet</Link>
    </div>
  );
}
