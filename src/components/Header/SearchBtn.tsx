import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  clickSearch,
  resetRedirect,
} from "../../redux/features/header/searchSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setQuery } from "../../redux/features/catalog/catalogSlice";

const SearchBtn = () => {
  const { searchQuery, shouldRedirect } = useAppSelector(
    (state) => state.search
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (shouldRedirect) {
      navigate(`/catalog`);
      dispatch(setQuery(searchQuery));
      dispatch(resetRedirect());
    }
  }, [shouldRedirect, searchQuery, dispatch, navigate]);

  return (
    <div
      data-id="search-expander"
      className="header-controls-pic header-controls-search"
      onClick={() => {
        dispatch(clickSearch());
      }}
    ></div>
  );
};

export default SearchBtn;
