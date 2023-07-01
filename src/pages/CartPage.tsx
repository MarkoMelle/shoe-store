import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import CartComponent from "../components/Cart";

const CartPage = () => {
  return (
    <>
      <Header />
      <main className="container">
        <div className="row">
          <div className="col">
            <Banner />
            <CartComponent />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CartPage;
