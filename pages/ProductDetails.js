import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products.json';
import { CartContext } from '../context/CartContext';

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id.toString() === id);
  const { addToCart } = useContext(CartContext);
  const [alertMsg, setAlertMsg] = useState(null);

  if (!product) return <div className="container mt-4">Product not found.</div>;

  const handleAdd = () => {
    addToCart(product);
    setAlertMsg(`${product.name} added to cart!`);
    setTimeout(() => setAlertMsg(null), 2000);
  };

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow-sm">
        <div className="row">
          <div className="col-md-5">
            <img src={product.image} alt={product.name} className="img-fluid rounded" />
          </div>
          <div className="col-md-7">
            <h3>{product.name}</h3>
            <p className="text-muted">{product.description}</p>
            <h4 className="text-success">₱{product.price}</h4>

            {alertMsg && <div className="alert alert-success py-2">{alertMsg}</div>}

            <div className="mt-3">
              <Link to="/products" className="btn btn-secondary me-2">Back</Link>
              <button className="btn btn-success" onClick={handleAdd}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
