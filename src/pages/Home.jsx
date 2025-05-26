import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from Fake Store API
  const fetchProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading products...</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full object-contain mb-4"
            />
            <h2 className="font-semibold text-lg mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-2">${product.price}</p>
            <Link
              to={`/product/${product.id}`}
              className="mt-auto inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-center"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
