import React, { useEffect, useState } from "react";
import axios from "axios";
import './GetData.css';

function GetData() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    getProducts();
    // axios
    //   .get("https://dummyjson.com/products")
    //   .then((response) => setProducts(response.data.products))
    //   .catch((error) => setError(error.message))
  }, [])

  async function getProducts() {
    try {
    const response = await axios.get("https://dummyjson.com/products");
    setProducts (response.data.products);
    } catch (error) {
    setError(error.message)
    }
    }
    

  return (
    <div className="product-container">
        {error != "" && <h1>{error}</h1>}
      {products.map((product, index) => {
        return (
          <div key={index} className="product-item">
            {product.images && product.images.length > 0 && (
              <div className="image-container">
                {product.images.slice(0, 4).map((image, imgIndex) => (
                  <img key={imgIndex} src={image} alt={product.title} className="product-image" />
                ))}
              </div>
            )}
            <h3>{product.title} | ${product.price}</h3>
          </div>
        )
      })}
    </div>
  );
}

export default GetData;