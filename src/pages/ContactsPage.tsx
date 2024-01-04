import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const ContactsPage = () => {
  return (
    <>
      <Header />
      <main className="container">
        <div className="row">
          <div className="col">
            <Banner />
            <section className="top-sales">
              <h2 className="text-center">Contacts</h2>
              <p>
                Our main office is located in Moscow, at the address: Varshavskoe
                shosse, d. 17, business center W Plaza.
              </p>
              <h5 className="text-center">Contact Information:</h5>
              <p>
                Phone: <a href="tel:+7-495-790-35-03">+7 495 79 03 5 03</a>{" "}
                (daily: from 09:00 to 21:00)
              </p>
              <p>
                Email:{" "}
                <a href="mailto:office@bosanoga.ru">office@bosanoga.ru</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactsPage;
