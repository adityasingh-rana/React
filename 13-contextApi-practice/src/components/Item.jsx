import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext';

function Item({itemName,price}) {
  let cartState = useContext(CartContext);
  return (
    <div>
      <h2 >{itemName}</h2>
      <p>price: ${price}</p>
      <button onClick={() => cartState.setItems([...cartState.items,{
        name: itemName,
        price: price,
      }])}>Add to Cart</button>
    </div>
  )
}

export default Item
