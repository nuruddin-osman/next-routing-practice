"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
// app/categories/[categorySlug]/[subCategorySlug]/[itemSlug]/[subItemSlug]/page.js
export default function SubItemPage() {
  const params = useParams();
  const { categorySlug, subCategorySlug, itemSlug, subItemSlug } = params;

  const fullPath = `/categories/${categorySlug}/${subCategorySlug}/${itemSlug}/${subItemSlug}/button`;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Sub-Item: {subItemSlug}</h1>
      <p className="text-lg">
        This sub-item belongs to {itemSlug} under {subCategorySlug} (Category:{" "}
        {categorySlug}).
      </p>
      <Link href={fullPath}>Button phone</Link>
    </div>
  );
}
