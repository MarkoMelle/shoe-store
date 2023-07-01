import Information from "./Information";
import PaymentSystems from "./PaymentSystems";
import Contacts from "./Contacts";
import Copyright from "./Copyright";

const Footer = () => (
  <footer className="container bg-light footer">
    <div className="row">
      <Information />
      <PaymentSystems />
      <Copyright />
      <Contacts />
    </div>
  </footer>
);

export default Footer;
