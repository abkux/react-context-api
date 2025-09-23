import React from 'react';
import Items from './components/Items';
import './index.css';
import Cart from './components/Cart';

export default function App() {
  return (
    <div>
      <Items name="MacBook Air" price={100000}/>
      <Items name="Pendrive" price={500}/>
      <Items name="iphone" price={52999}/>
      <Cart/>
    </div>
  );
}
