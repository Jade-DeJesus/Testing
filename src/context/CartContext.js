
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]); // {id, name, price, qty, image}

  const addToCart = (product, qty = 1) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + qty } : i);
      }
      return [...prev, { id: product.id, name: product.name, price: product.price, image: product.image, qty }];
    });
  };

  const removeFromCart = (id) => setItems(prev => prev.filter(i => i.id !== id));

  const updateQty = (id, qty) => setItems(prev => prev.map(i => i.id === id ? { ...i, qty: Math.max(1, qty) } : i));

  const clearCart = () => setItems([]);

  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQty, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}
