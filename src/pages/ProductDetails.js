import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from '../context/CartContext';
import productsData from '../data/products.json';
import images from '../data/imageMap';

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [prod, setProd] = useState(null);
  const [alertMsg, setAlertMsg] = useState(null);

  useEffect(() => {
    const found = productsData.find((p) => p.id.toString() === id);
    setProd(found);
  }, [id]);

  if (!prod) return <div className="container mt-4">Product not found.</div>;

  const handleAdd = () => {
    addToCart(prod);
    setAlertMsg(`${prod.name} added to cart!`);
    setTimeout(() => setAlertMsg(null), 2000);
  };

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow-sm">
        <div className="row">
          <div className="col-md-5">
            <img
              src={images[prod.image]}
              alt={prod.name}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-7">
            <h3>{prod.name}</h3>
            <p className="text-muted">{prod.description}</p>
            <h4 className="text-success">₱{prod.price}</h4>
            {alertMsg && (
              <div className="alert alert-success py-2 mt-2">{alertMsg}</div>
            )}
            <div className="mt-3">
              <Link to="/products" className="btn btn-secondary me-2">
                Back
              </Link>
              <button className="btn btn-success" onClick={handleAdd}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
