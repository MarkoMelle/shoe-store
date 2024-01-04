import { useAppSelector, useAppDispatch } from "../../hooks";
import {
  changeSearchField,
  clickSearch,
} from "../../redux/features/header/searchSlice";

const SearchForm = () => {
  const value = useAppSelector((state) => state.search.searchField);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(clickSearch());
  };

  return (
    <form
      data-id="search-form"
      className={`header-controls-search-form form-inline ${
        useAppSelector((state) => state.search.isOpen) ? "" : "invisible"
      }`}
      onSubmit={handleSubmit}
    >
      <input
        className="form-control"
        placeholder="Search"
        onChange={(e) => {
          dispatch(changeSearchField(e.target.value));
        }}
        value={value}
      />
    </form>
  );
};

export default SearchForm;
