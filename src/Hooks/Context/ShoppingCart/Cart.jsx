import React from 'react'
import { useCart } from './CartContext'
import './Cart.css'

function Cart() {
    const { cart, delItem, delAll } = useCart();
  return (
    <div className='cart-box'>
        <div className="cart-head">
        <h2 style={{color: 'yellow'}}>Cart List</h2>
        <button onClick={delAll} className='btn-del'>Delete All</button>
        </div>
        <ul className='cart-ul'>
            {cart.map((item, index) => (
                <li key={index} className='cart-li'>
                    <h3>{item.name}</h3>
                    <p>{item.price}$</p>
                    <button onClick={() => delItem(index)} className='btn'>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Cart