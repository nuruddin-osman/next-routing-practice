"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

// app/categories/[categorySlug]/[subCategorySlug]/[itemSlug]/page.js
export default function ItemPage() {
  const params = useParams();
  const { categorySlug, subCategorySlug, itemSlug } = params;
  const fullPath = `/categories/${categorySlug}/${subCategorySlug}/${itemSlug}/GDL`;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Item: {itemSlug}</h1>
      <p className="text-lg">
        This item belongs to {subCategorySlug} under {categorySlug}.
      </p>
      <Link href={fullPath}>GDL</Link>
    </div>
  );
}
