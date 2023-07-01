import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiClient } from "../../../api/apiClient";
import { CardProps } from "../../../components/Card/Card";
import {Product} from "../catalog/catalogSlice";

interface TopSalesState {
  sales: Array<CardProps>;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: TopSalesState = {
  sales: [],
  status: "idle",
  error: null,
};

export const fetchTopSales = createAsyncThunk(
  "topSales/fetchTopSales",
  async () => {
    const response = await apiClient.getTopSales();
    return response;
  }
);

export const topSalesSlice = createSlice({
  name: "topSales",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopSales.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchTopSales.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.status = "succeeded";
          state.sales = action.payload.map((item) => ({
            id: item.id,
            title: item.title,
            price: item.price,
            imageUrl: item.images[0],
          }));
        }
      )
      .addCase(fetchTopSales.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export default topSalesSlice.reducer;
