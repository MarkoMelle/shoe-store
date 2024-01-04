import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
const ErrorPage = () => {
  return (
    <>
      <Header />
      <main className="container">
        <div className="row">
          <div className="col">
            <Banner />
            <section className="top-sales">
              <h2 className="text-center">Page Not Found</h2>
              <p>Sorry, the requested page was not found!</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ErrorPage;
