import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    title: "Rolex Oyster",
    description: "Fancy & elegant watch for men",
    category: "Men",
    price: "49.99 $",
    image:
      "https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-grid/c_limit,w_2440/v1/catalogue/2024/upright-bba-with-shadow/m126234-0051",
  },
  {
    title: "Nike Sneaker",
    description: "Relax & eye catching shoes",
    category: "Boys",
    price: "29.99 $",
    image:
      "https://toppng.com/uploads/preview/nike-shoes-11528495436yyrrlhibvc.png",
  },
  {
    title: "Gucci Bags",
    description: "Stylish & eye catching bags",
    category: "Women",
    price: "19.99 $",
    image:
      "https://w7.pngwing.com/pngs/979/134/png-transparent-gucci-fashion-messenger-bags-handbag-bag-brown-leather-fashion-thumbnail.png",
  },
];

export default function Wrapper() {
  return (
    <div className="min-h-screen flex items-center justify-center gap-4">
      {products.map((product) => (
        <ProductCard className="bg-white/15">
          <ProductCard.Title className="bg-white/10 p-1 rounded-lg text-xl">
            {product.title}
          </ProductCard.Title>
          <ProductCard.Image className="w-52 h-auto">
            {product.image}
          </ProductCard.Image>
          <div className="flex items-center justify-between px-6">
            <ProductCard.Category>{product.category}</ProductCard.Category>
            <ProductCard.Price>{product.price}</ProductCard.Price>
          </div>
          <ProductCard.Description
            rank="Top"
            star="⭐⭐⭐⭐⭐"
            className="bg-white/5 text-gray-300 px-2 py-1 mt-3 rounded"
          >
            {product.description}
          </ProductCard.Description>
          <ProductCard.Button>ADD TO CART</ProductCard.Button>
        </ProductCard>
      ))}
    </div>
  );
}
