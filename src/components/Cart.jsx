import React from 'react';
import '../index.css';
import { useContext, useMemo } from 'react';
import { useCart } from '../context/Cart';

export default function Cart() {
  // const cart = useContext(CartContext);
  // now we can direclty use it.
  // better for readability

const cart = useCart();

  const total = useMemo(() => cart.items.reduce((a, b) => a + b.price, 0), [cart.items]);
  return (
    <div>
      <h1> Cart </h1>
      {
        cart && cart.items.map(item => <li>{item.name} - ${item.price}</li>)
      }
      <p>Total: ${total}</p>
    </div>
  );
}
