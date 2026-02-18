import { createContext, useContext, useState} from "react";

export const CartContext = createContext(null);
export const useCart = () => {
  const cartState = useContext(CartContext);
  return cartState;
}

export const CartProvider = (props) => {
  let [items,setItems] = useState([]);
  return (
    <CartContext.Provider value={{items, setItems}}>
      {props.children}
    </CartContext.Provider>
  );
}
