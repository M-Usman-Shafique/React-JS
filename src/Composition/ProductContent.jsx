import React, { useContext } from "react";
import { CardContext } from "./ProductCard";
import { twMerge } from "tailwind-merge";

export function ProductTitle({ children, className }) {
  return (
    <div className={twMerge("text-center text-2xl font-semibold", className)}>
      {children}
    </div>
  );
}

export function ProductDescription({ children, className, ...props }) {
  return (
    <div className={className} {...props}>
      <div className="flex items-center justify-between">
        {props.rank && (
          <span className="text-sm text-gray-400">{props.rank} Rank:</span>
        )}
        {props.star && (
          <span className="text-sm text-gray-400">{props.star}</span>
        )}
      </div>
      {children}
    </div>
  );
}

export function ProductCategory({ children, className }) {
  const { isSelected } = useContext(CardContext);

  return isSelected ? <div className={className}>{children}</div> : null;
}

export function ProductPrice({ children, className }) {
  const { isSelected } = useContext(CardContext);

  return isSelected ? <div className={className}>{children}</div> : null;
}

export function ProductImage({ children, className }) {
  return (
    <img
      src={children}
      alt="product-image"
      className={twMerge("size-36 rounded-lg", className)}
    />
  );
}

export function ProductButton({ children, className }) {
  return (
    <button
      className={twMerge(
        "p-1 px-2 text-gray-100 bg-white/15 w-full rounded-lg mt-2",
        className
      )}
    >
      {children}
    </button>
  );
}
