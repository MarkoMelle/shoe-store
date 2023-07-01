import { configureStore } from "@reduxjs/toolkit";

import searchReducer from "./features/header/searchSlice";
import cartSlice from "./features/header/cartSlice";
import topSalesSlice from "./features/topSales/topSalesSlice";
import catalogSlice from "./features/catalog/catalogSlice";
import catalogItemSlice from "./features/catalogItem/catalogItemSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    cart: cartSlice,
    topSales: topSalesSlice,
    catalog: catalogSlice,
    catalogItem: catalogItemSlice,
  },
});

export type RootState = {
  search: ReturnType<typeof searchReducer>;
  cart: ReturnType<typeof cartSlice>;
  topSales: ReturnType<typeof topSalesSlice>;
  catalog: ReturnType<typeof catalogSlice>;
  catalogItem: ReturnType<typeof catalogItemSlice>;
};
export type AppDispatch = typeof store.dispatch;
