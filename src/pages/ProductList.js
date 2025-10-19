import React, { useEffect, useState } from "react";
import productsData from '../data/products.json';
import ProductCard from '../components/ProductCard';


export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const fruits = products.filter(
    (p) => p.category && p.category.toLowerCase().includes("fruit")
  );
  const vegetables = products.filter(
    (p) => p.category && p.category.toLowerCase().includes("vegetable")
  );

  const renderItems = (items) => (
    <div className="row">
      {items.map((p) => (
        <div key={p.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Fresh Produce</h2>
      <h4 className="text-success mb-3">🍎 Fruits</h4>
      {renderItems(fruits)}
      <hr className="my-4" />
      <h4 className="text-success mb-3">🥬 Vegetables</h4>
      {renderItems(vegetables)}
    </div>
  );
}
