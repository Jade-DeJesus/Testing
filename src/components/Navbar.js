
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function Navbar() {
  const { items } = useContext(CartContext);
  const count = items.reduce((s,i)=> s + i.qty, 0);
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor:'#4CAF50'}}>
      <div className="container">
        <Link className="navbar-brand text-white fw-bold" to="/">FreshMart</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><NavLink to="/" className="nav-link text-white">Home</NavLink></li>
            <li className="nav-item"><NavLink to="/products" className="nav-link text-white">Products</NavLink></li>
            <li className="nav-item"><NavLink to="/cart" className="nav-link text-white">Cart {count>0 && <span className="badge bg-dark ms-1">{count}</span>}</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
