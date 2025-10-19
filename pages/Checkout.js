
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

export default function Checkout() {
  const { items, total, clearCart } = useContext(CartContext);
  const [form, setForm] = useState({ name:'', address:'', phone:'' });
  const [msg, setMsg] = useState(null);

  const handleChange = (e) => setForm(prev=> ({...prev, [e.target.name]: e.target.value}));

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!form.name || !form.address) { setMsg('Please fill in required fields'); return; }
    clearCart();
    setMsg('Order placed! Thank you.');
  };

  return (
    <div className="container mt-4">
      <h2>Checkout</h2>
      {msg && <div className="alert alert-info">{msg}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input name="name" className="form-control" value={form.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input name="address" className="form-control" value={form.address} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input name="phone" className="form-control" value={form.phone} onChange={handleChange} />
        </div>
        <h5>Order total: ₱{total.toFixed(2)}</h5>
        <button className="btn btn-success mt-3" type="submit">Place Order</button>
      </form>
    </div>
  );
}
