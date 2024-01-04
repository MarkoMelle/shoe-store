import React from "react";

interface ProductSizesProps {
  sizes: Array<{ value: string; selected: boolean }>;
  onSelectSize: (size: string) => void;
}

const ProductSizes: React.FC<ProductSizesProps> = ({ sizes, onSelectSize }) => (
  <p>
    Available sizes:
    {sizes.map((size) => (
      <span
        key={size.value}
        className={`catalog-item-size ${size.selected ? "selected" : ""}`}
        onClick={() => onSelectSize(size.value)}
      >
        {size.value}
      </span>
    ))}
  </p>
);

export default ProductSizes;
