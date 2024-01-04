/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Card from "../Card/Card";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Preloader from "../Preloader/Preloader";
import {
  fetchProducts,
  fetchCategories,
  loadMoreProducts,
  resetCatalogState,
} from "../../redux/features/catalog/catalogSlice";
import { debounce } from "lodash";

const Catalog: React.FC<{
  isCatalogPage: boolean;
  queryFromSearch?: string;
}> = ({ isCatalogPage = false, queryFromSearch }) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.catalog.products);
  const categories = useAppSelector((state) => state.catalog.categories);
  const status = useAppSelector((state) => state.catalog.status);
  const activeCategoryId = useAppSelector(
    (state) => state.catalog.activeCategoryId
  );
  const location = useLocation();

  const [query, setQuery] = useState("");

  const debouncedFetch = React.useCallback(
    (value: string) => {
      debounce(() => {
        dispatch(
          fetchProducts({ categoryId: activeCategoryId, q: value, offset: 0 })
        );
      }, 1000)();
    },
    [dispatch, activeCategoryId]
  );
  

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    debouncedFetch(value);
  };

  React.useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories());
    }
  }, [dispatch, categories.length]);

  React.useEffect(() => {
    dispatch(resetCatalogState());
    if (queryFromSearch) {
      setQuery(queryFromSearch);
      dispatch(
        fetchProducts({
          categoryId: activeCategoryId,
          q: queryFromSearch,
          offset: 0,
        })
      );
      return;
    }
    dispatch(
      fetchProducts({ categoryId: activeCategoryId, q: query, offset: 0 })
    );
  }, [dispatch, activeCategoryId, location]);

  return (
    <section className="catalog">
      <h2 className="text-center">Catalog</h2>
      {isCatalogPage && (
        <form className="catalog-search-form form-inline">
          <input
            className="form-control"
            placeholder="Search"
            value={query}
            onChange={handleOnChange}
          ></input>
        </form>
      )}
      {status === "loading" && <Preloader />}
      {status === "failed" && <h3>Something went wrong...</h3>}
      {status === "succeeded" && <Navbar categories={categories} />}
      <div className="row">
        {status === "succeeded" &&
          products.map((product) => (
            <Card key={product.id} className="catalog-item-card" {...product} />
          ))}
      </div>
      {status === "succeeded" && products.length === 0 && (
        <h3>Nothing found</h3>
      )}
      {status === "succeeded" && products.length !== 0 && (
        <div className="text-center">
          <button
            className="btn btn-outline-primary"
            onClick={() => dispatch(loadMoreProducts())}
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default Catalog;
