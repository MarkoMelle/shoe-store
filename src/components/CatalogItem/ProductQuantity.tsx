import {
  incrementQuantity,
  decrementQuantity,
} from "../../redux/features/catalogItem/catalogItemSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { PayloadAction } from "@reduxjs/toolkit";

const ProductQuantity: React.FC = () => {
  const dispatch = useAppDispatch();
  const quantity = useAppSelector(
    (state) => state.catalogItem.product.quantity
  );

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, action: PayloadAction<void>) => {
    e.preventDefault();
    dispatch(action);
    e.currentTarget.blur();
  };

  return (
    <p>
      Quantity:
      <span className="btn-group btn-group-sm pl-2">
        <button
          className="btn btn-secondary"
          onClick={(e) => handleClick(e, decrementQuantity())}
        >
          -
        </button>
        <span className="btn btn-outline-primary">{quantity}</span>
        <button
          className="btn btn-secondary"
          onClick={(e) => handleClick(e, incrementQuantity())}
        >
          +
        </button>
      </span>
    </p>
  );
};

export default ProductQuantity;
