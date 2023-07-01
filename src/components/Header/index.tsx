import Navbar from "./Navbar";
import Controls from "./Controls";
import SearchForm from "./SearchForm";
import logo from "../../public/img/header-logo.png";

const Header = () => {
  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="Bosa Noga" />
            </a>
            <div className="collapase navbar-collapse" id="navbarMain">
              <Navbar />
              <Controls />
              <SearchForm />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
