import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import TopSales from "../components/TopSales";
import Catalog from "../components/Сatalog";
const HomePage = () => {
  return (
    <>
      <Header />

      <div className="container">
        <Banner />
        <TopSales />
        <Catalog isCatalogPage={false} />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
