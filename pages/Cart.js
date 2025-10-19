
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import images from '../data/imageMap';


export default function Cart() {
  const { items, removeFromCart, updateQty, clearCart, total } = useContext(CartContext);

  if (items.length === 0) {
    return (
      <div className="container mt-4">
        <h2>Your Cart</h2>
        <div className="alert alert-info">Your cart is empty. <Link to="/products">Shop now</Link></div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      <ul className="list-group mb-3">
        {items.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div style={{maxWidth: '60%'}}>
              <div className="d-flex align-items-center gap-3">
                <img src={images[item.image]} alt={item.name} style={{ width: 64, height: 64, objectFit: "cover" }} className="rounded"/>
                <div>
                  <strong>{item.name}</strong><br/>
                  <small className="text-muted">₱{item.price}</small>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <input type="number" min="1" value={item.qty} onChange={(e)=> updateQty(item.id, Number(e.target.value))} style={{width:80}} className="form-control form-control-sm" />
              <button className="btn btn-sm btn-outline-danger" onClick={()=> removeFromCart(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <h4>Total: ₱{total.toFixed(2)}</h4>
      <div className="mt-3">
        <Link to="/checkout" className="btn btn-success me-2">Checkout</Link>
        <button className="btn btn-outline-secondary" onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  );
}
