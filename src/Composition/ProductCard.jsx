import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  ProductCategory,
  ProductDescription,
  ProductImage,
  ProductPrice,
  ProductTitle,
  ProductButton,
} from "./ProductContent";
import { createContext } from "react";

export const CardContext = createContext();

export default function ProductCard({ children, className }) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <CardContext.Provider value={{ isSelected }}>
      <div
        onClick={() => setIsSelected((prev) => !prev)}
        className={twMerge(
          "bg-indigo-900 rounded-lg p-4 cursor-pointer",
          className
        )}
      >
        {children}
      </div>
    </CardContext.Provider>
  );
}

ProductCard.Title = ProductTitle;
ProductCard.Description = ProductDescription;
ProductCard.Category = ProductCategory;
ProductCard.Price = ProductPrice;
ProductCard.Image = ProductImage;
ProductCard.Button = ProductButton;
