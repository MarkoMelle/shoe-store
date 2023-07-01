import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Catalog from "../components/Сatalog";
import { useAppSelector } from "../hooks";

const CatalogPage = () => {
  const query = useAppSelector((state) => state.catalog.query);
  return (
    <>
      <Header />
      <main className="container">
        <div className="row">
          <div className="col">
            <Banner />
            <Catalog isCatalogPage={true} queryFromSearch={query} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CatalogPage;
