// app/products/[productSlug]/page.js
const products = [
  {
    slug: "laptop-1",
    name: "Laptop 1",
    description:
      "This is a high-performance laptop with 16GB RAM and 512GB SSD.",
    price: "$1200",
    image: "https://via.placeholder.com/400",
  },
  {
    slug: "laptop-2",
    name: "Laptop 2",
    description: "A sleek and lightweight laptop with 8GB RAM and 256GB SSD.",
    price: "$900",
    image: "https://via.placeholder.com/400",
  },
  {
    slug: "laptop-3",
    name: "Laptop 3",
    description: "A gaming laptop with 32GB RAM and 1TB SSD.",
    price: "$1500",
    image: "https://via.placeholder.com/400",
  },
];

export default function ProductPage({ params }) {
  const { productSlug } = params;
  const product = products.find((p) => p.slug === productSlug);

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-lg text-gray-700">{product.description}</p>
          <p className="text-2xl font-semibold">{product.price}</p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
