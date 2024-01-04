import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="container">
        <div className="row">
          <div className="col">
            <Banner />
            <section className="top-sales">
              <h2 className="text-center">About the Store</h2>
              <p>
                On the Internet, you can find many stores offering accessories.
                But it is to us that you want to come back again and again.
              </p>
              <p className="h4 text-center">We offer you special conditions:</p>
              <ol>
                <li>
                  Individual approach of a specialist. When a new collection of
                  spring-summer or autumn-winter footwear arrives, it can be
                  difficult for buyers to navigate the variety of novelties. Our
                  manager over the phone will help you determine the products
                  that are right for you.
                </li>
                <li>
                  We periodically hold sales of both women's and men's, as well
                  as children's models. You will be pleasantly surprised by the
                  prices for accessories at the BosaNoga store.
                </li>
                <li>
                  We always have plenty to choose from. No matter which category
                  you are browsing: autumn-winter or spring-summer - you will
                  always be able to find options that suit you in terms of
                  appearance and price.
                </li>
                <li>We are responsible for all products.</li>
                <li>
                  Young mothers will appreciate the wide range of children's
                  models.
                </li>
              </ol>
              <p>
                If you are looking for a place where the latest footwear from
                the most famous brands is presented, then you have come to the
                right address.
              </p>
              <p>
                We have models for men, women, as well as children's boots,
                sandals, boots, and shoes. By placing an order in our online
                store, you can be fashionable and stylish both in autumn-winter
                and spring-summer. Just dial our phone number, and we will help
                you make a purchase.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
