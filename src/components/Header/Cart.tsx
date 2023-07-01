import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks";

const Cart = () => {
  const value = useAppSelector((state) => state.cart.items.length);

  return (
    <>
      <Link to="/cart">
        <div className="header-controls-pic header-controls-cart">
          {value > 0 && (
            <div className="header-controls-cart-full">{value}</div>
          )}
          <div className="header-controls-cart-menu"></div>
        </div>
      </Link>
    </>
  );
};

export default Cart;
