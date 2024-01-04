import { removeFromCart } from "../../redux/features/header/cartSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { CartItem } from "../../redux/features/header/cartSlice";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const handleRemove = (item: CartItem) => {
    dispatch(removeFromCart(item));
  };

  const totalCost = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <section className="cart">
      <h2 className="text-center">Cart</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Size</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Total</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={item.id}>
              <td scope="row">{index + 1}</td>
              <td>
                <a href={`/products/${item.id}`}>{item.name}</a>
              </td>
              <td>{item.size}</td>
              <td>{item.quantity}</td>
              <td>{item.price} rub.</td>
              <td>{item.price * item.quantity} rub.</td>
              <td>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => handleRemove(item)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={5} className="text-right">
              Total Cost
            </td>
            <td>{totalCost} rub.</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Cart;
