import Navbar from "./Navbar";
import Controls from "./Controls";
import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <a className="navbar-brand" href="/">
              <img src="/img/header-logo.png" alt="Bosa Noga" />
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
