import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const pages = [
    { path: "/", name: "Home" },
    { path: "/catalog", name: "Catalog" },
    { path: "/about", name: "About" },
    { path: "/contacts", name: "Contacts" },
  ];

  return (
    <ul className="navbar-nav mr-auto">
      {pages.map((page) => (
        <li
          className={`nav-item ${
            location.pathname === page.path ? "active" : ""
          }`}
          key={page.path}
        >
          <Link className="nav-link" to={page.path}>
            {page.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
