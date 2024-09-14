import React, { useEffect, useState } from "react";
import axios from "axios";

function PostData() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const product = { title: "Apple 13", price: 799 };
    axios
      .post("https://dummyjson.com/products/add", product)
      .then((response) => alert("Product added Successfully!!"));
  }, [])

  return (
    <>
      {products.map((product, index) => {
        return (
          <h3 key={index}>
            {product.title} - ${product.price}
          </h3>
        );
      })}
    </>
  );
}
export default PostData;
