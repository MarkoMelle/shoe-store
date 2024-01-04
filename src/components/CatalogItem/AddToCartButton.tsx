import React from "react";
import { useNavigate } from "react-router-dom"; 
import { ProductState } from "../../redux/features/catalogItem/catalogItemSlice";
import { addToCart, CartItem } from "../../redux/features/header/cartSlice";
import { useAppDispatch } from "../../hooks";

interface AddToCartButtonProps {
  disabled: boolean;
  product: ProductState["product"];
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  disabled,
  product,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const selectedSize = product.sizes.find((size) => size.selected);
    if (!selectedSize) {
      return;
    }
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      size: selectedSize.value,
      price: product.price || 0,
      quantity: product.quantity,
    };

    dispatch(addToCart(cartItem));
    console.log("cartItem", cartItem);

    navigate("/cart");
  };

  return (
    <button
      className="btn btn-danger btn-block btn-lg"
      type="button"
      disabled={disabled}
      onClick={handleClick}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
