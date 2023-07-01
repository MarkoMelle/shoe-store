import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import CatalogItem from "../components/CatalogItem";

const CatalogItemPage = () => {
  const { id } = useParams();
  const numericId = id ? Number(id) : 1;

  return (
    <>
      <Header />
      <main className="container">
        <div className="row">
          <div className="col">
            <Banner />
            <CatalogItem id={numericId} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CatalogItemPage;
