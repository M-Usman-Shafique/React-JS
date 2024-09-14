import React from 'react'
import { CartProvider } from './CartContext'
import Products from './Products'
import Cart from './Cart'

function Wrapit() {
  return (
<CartProvider>
<Products />
<br />
<hr />
<Cart />
</CartProvider>
)
}

export default Wrapit