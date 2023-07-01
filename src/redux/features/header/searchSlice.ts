import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  isOpen: boolean;
  searchField: string;
  searchQuery: string;
  shouldRedirect: boolean;
}

const initialState: SearchState = {
  isOpen: false,
  searchField: "",
  searchQuery: "",
  shouldRedirect: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clickSearch: (state) => {
      if (state.isOpen && state.searchField !== "") {
        state.searchQuery = state.searchField;
        state.searchField = "";
        state.shouldRedirect = true;
        state.isOpen = false;
      } else {
        state.isOpen = !state.isOpen;
      }
    },
    changeSearchField: (state, action: PayloadAction<string>) => {
      state.searchField = action.payload;
    },
    resetRedirect: (state) => {
      state.shouldRedirect = false;
    },
  },
});

export const { clickSearch, changeSearchField, resetRedirect } =
  searchSlice.actions;

export default searchSlice.reducer;
