import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products.json';
import { CartContext } from '../context/CartContext';

export default function Products() {
  const { addToCart } = useContext(CartContext);
  const [alertMsg, setAlertMsg] = useState(null);

  const fruits = products.filter(p => p.category === 'Fruit');
  const vegetables = products.filter(p => p.category === 'Vegetable');

  const handleAdd = (product) => {
    addToCart(product);
    setAlertMsg(`${product.name} added to cart!`);
    setTimeout(() => setAlertMsg(null), 2000);
  };

  const renderItems = (items) => (
    <div className="row">
      {items.map(p => (
        <div key={p.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card h-100 shadow-sm">
            <img src={p.image} className="card-img-top" alt={p.name} />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{p.name}</h5>
              <p className="card-text text-muted" style={{flex:1}}>{p.description}</p>
              <div className="d-flex justify-content-between align-items-center">
                <strong>₱{p.price}</strong>
                <div>
                  <Link to={`/products/${p.id}`} className="btn btn-sm btn-outline-success me-2">Details</Link>
                  <button className="btn btn-sm btn-success" onClick={() => handleAdd(p)}>Add</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Fresh Produce</h2>

      {alertMsg && <div className="alert alert-success text-center">{alertMsg}</div>}

      <h4 className="text-success mb-3">🍎 Fruits</h4>
      {renderItems(fruits)}
      <hr className="my-4" />
      <h4 className="text-success mb-3">🥬 Vegetables</h4>
      {renderItems(vegetables)}
    </div>
  );
}
