import { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);

//basically multiple import ke badle unko club kardiya hamne
export const useCart = () => {
    const cart = useContext(CartContext);
    return cart;
}

export const CartProvider = (props) => {
    const [items, setItems] = useState([]);
    return <CartContext.Provider value={{items, setItems}}>{props.children}</CartContext.Provider>;
};
