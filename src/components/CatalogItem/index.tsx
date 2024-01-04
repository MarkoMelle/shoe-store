import React from "react";
import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";
import ProductSizes from "./ProductSizes";
import ProductQuantity from "./ProductQuantity";
import AddToCartButton from "./AddToCartButton";
import {
  fetchProductById,
  setProductSizes,
} from "../../redux/features/catalogItem/catalogItemSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Preloader from "../Preloader/Preloader";

interface CatalogItemProps {
  id: number;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.catalogItem.product);
  const status = useAppSelector((state) => state.catalogItem.status);

  React.useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);
  const selectSize = (sizeValue: string) => {
    dispatch(
      setProductSizes(
        product.sizes.map((size) =>
          size.value === sizeValue
            ? { ...size, selected: !size.selected }
            : { ...size, selected: false }
        )
      )
    );
  };

  return (
    <section className="catalog-item">
      {status === "loading" && <Preloader />}
      {status === "failed" && <div>Something went wrong...</div>}
      {status === "succeeded" && !product && <div>Product not found</div>}
      {status === "succeeded" && product && (
        <>
          <h2 className="text-center">{product.name}</h2>
          <div className="row">
            <ProductImage src={product.imageSrc} alt={product.name} />
            <div className="col-7">
              <ProductDetails details={product.details} />
              <div className="text-center">
                {product.sizes.length !== 0 ? (
                  <ProductSizes
                    sizes={product.sizes}
                    onSelectSize={selectSize}
                  />
                ) : (
                  <p>Out of stock</p>
                )}
                {product.sizes.length !== 0 && <ProductQuantity />}
              </div>
              {product.sizes.length !== 0 && (
                <AddToCartButton
                  disabled={!product.sizes.some((size) => size.selected)}
                  product={product}
                />
              )}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default CatalogItem;
