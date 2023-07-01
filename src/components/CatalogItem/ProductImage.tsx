import React from "react";

interface ProductImageProps {
  src: string;
  alt: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ src, alt }) => (
  <div className="col-5">
    <img src={src} className="img-fluid" alt={alt} />
  </div>
);

export default ProductImage;
