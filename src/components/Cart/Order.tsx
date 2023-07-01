import { useState } from "react";
import { apiClient } from "../../api/apiClient";

const OrderForm = () => {
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [agreement, setAgreement] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const items = JSON.parse(localStorage.getItem("cart") || "[]").map(
      (item: { id: number; price: number; quantity: number }) => ({
        id: item.id,
        price: item.price,
        count: item.quantity,
      })
    );
    console.log(items);
    apiClient.postOrder({
      owner: {
        phone,
        address,
      },
      items,
    });
  };

  return (
    <section className="order">
      <h2 className="text-center">Оформить заказ</h2>
      <div className="card" style={{ maxWidth: "30rem", margin: "0 auto" }}>
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="phone">Телефон</label>
            <input
              className="form-control"
              id="phone"
              placeholder="Ваш телефон"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Адрес доставки</label>
            <input
              className="form-control"
              id="address"
              placeholder="Адрес доставки"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="agreement"
              checked={agreement}
              onChange={(e) => setAgreement(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="agreement">
              Согласен с правилами доставки
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-outline-secondary"
            disabled={!agreement}
          >
            Оформить
          </button>
        </form>
      </div>
    </section>
  );
};

export default OrderForm;
