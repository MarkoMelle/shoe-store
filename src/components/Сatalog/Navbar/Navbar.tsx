import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { Link } from "react-router-dom";
import { setCategory } from "../../../redux/features/catalog/catalogSlice";

interface NavbarProps {
  categories: Array<{ id: number; title: string }>;
}

const Navbar: React.FC<NavbarProps> = ({ categories }) => {
  const dispatch = useAppDispatch();
  const activeCategory = useAppSelector(
    (state) => state.catalog.activeCategory
  );

  const handleClick = (category: string) => {
    if (category !== activeCategory) {
      dispatch(setCategory(category));
    }
  };

  return (
    <ul className="catalog-categories nav justify-content-center">
      <li className="nav-item">
        <Link
          to="#"
          className={activeCategory === "Все" ? "nav-link active" : "nav-link"}
          onClick={(e) => {
            e.preventDefault();
            handleClick("Все");
          }}
        >
          Все
        </Link>
      </li>
      {categories.map((category) => (
        <li key={category.id} className="nav-item">
          <Link
            to="#"
            className={
              activeCategory === category.title ? "nav-link active" : "nav-link"
            }
            onClick={(e) => {
              e.preventDefault();
              handleClick(category.title);
            }}
          >
            {category.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
