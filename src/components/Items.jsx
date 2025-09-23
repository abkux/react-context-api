import '../index.css';
import { useContext } from 'react';
import { CartContext } from '../context/Cart';

export default function Items(props) {
  const cart = useContext(CartContext);
  return (
    <div>
      <div >
        <h1>{props.name}</h1>
        <p>Price: {props.price}</p>
        <button onClick={() => cart.setItems([...cart.items, {name: props.name, price: props.price}])}>Add to Cart</button>
      </div>
    </div>
  );
}
