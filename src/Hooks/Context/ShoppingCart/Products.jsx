import React from "react";
import { useCart } from "./CartContext";
import "./Products.css";

function Products() {
  const products = [
    { id: 1, name: "Mobile", price: 100 },
    { id: 2, name: "Fridge", price: 500 },
    { id: 3, name: "Bike", price: 800 },
    { id: 4, name: "Car", price: 1000 },
  ];

  const { cart, addToCart } = useCart();
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);
  return (
    <div className="pro-box">
      <div className="headings">
        <h2 style={{color: 'lightgreen'}}>Total Price: {totalPrice}$</h2>
        <h2 style={{color: 'yellow'}}>Products List</h2>
        <h2 style={{color: 'dodgerblue'}}>Cart Couter: {cart.length}</h2>
      </div>
      <ul className="pro-ul">
        {products.map((product) => (
          <li key={product.id} className="pro-li">
            <h3>{product.name}</h3>
            <p>{product.price}$</p>
            <button onClick={() => addToCart(product)} className="btn-all">Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
