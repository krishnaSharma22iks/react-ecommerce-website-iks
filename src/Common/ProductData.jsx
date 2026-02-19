import { useState, useEffect } from "react";
import Category from "../Pages/Category";

export const ProductData = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=0")
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center py-10">Loading...</p>;
  }

  return <Category products={products} />;
};
