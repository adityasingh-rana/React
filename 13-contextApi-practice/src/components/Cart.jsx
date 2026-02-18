import React from 'react'
import { useCart } from '../context/CartContext';

function Cart() {
  let cartState = useCart();
  let total = cartState.items.reduce((a,b) => a + b.price, 0);
  return (
    <div className='cart' >
      <h2>CART</h2>
      {
        cartState && cartState.items.map(items => <li>{items.name} --- ${items.price}</li>)
      }
      <h3>Total Bill: ${total}</h3>
    </div>
  )
}

export default Cart;
