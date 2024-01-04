import { Link } from "react-router-dom";

const Information = () => (
  <div className="col">
    <section>
      <h5>Information</h5>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/catalog" className="nav-link">
            Catalog
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contacts" className="nav-link">
            Contacts
          </Link>
        </li>
      </ul>
    </section>
  </div>
);

export default Information;
