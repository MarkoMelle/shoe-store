
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiClient } from "../../../api/apiClient";
import { CardProps } from "../../../components/Card/Card";

export interface Product {
  id: number;
  title: string;
  price: number;
  images: [string];
}

interface Category {
  id: number;
  title: string;
}


interface catalogState {
  products: Array<CardProps>;
  status: "idle" | "loading" | "succeeded" | "failed";
  categories: Array<{ id: number; title: string }>;
  offset?: number;
  query: string;
  activeCategoryId?: number;
  activeCategory: string;
  error: string | null;
}

const initialState: catalogState = {
  products: [],
  activeCategory: "All",
  status: "idle",
  categories: [],
  error: null,
  query: "",
};

export const fetchProducts = createAsyncThunk(
  "catalog/fetchProducts",
  async ({
    offset,
    q,
    categoryId,
  }: {
    offset?: number;
    q?: string;
    categoryId?: number;
  }) => {
    const response = await apiClient.getItems(offset, q, categoryId);
    return response;
  }
);

export const fetchCategories = createAsyncThunk(
  "catalog/fetchCategories",
  async () => {
    const response = await apiClient.getCategories();
    return response;
  }
);

export const loadMoreProducts = createAsyncThunk(
  "catalog/loadMoreProducts",
  async (_, { getState, dispatch }) => {
    const state = getState() as { catalog: catalogState };
    const { activeCategoryId, query, offset } = state.catalog;

    dispatch(incrementOffset());

    const response = await apiClient.getItems(
      offset ? offset + 6 : 6,
      query,
      activeCategoryId
    );
    return response;
  }
);

export const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    resetCatalogState: (state) => {
      state.products = [];
      state.offset = undefined;
      state.query = "";
    },
    setCategory: (state, action: PayloadAction<string>) => {
      const category = state.categories.find(
        (item) => item.title === action.payload
      );
      state.activeCategory = action.payload;
      state.activeCategoryId = category ? category.id : undefined;
    },
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    incrementOffset: (state) => {
      state.offset = state.offset ? state.offset + 6 : 6;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.status = "succeeded";
          const newProducts = action.payload.map((item) => ({
            id: item.id,
            title: item.title,
            price: item.price,
            imageUrl: item.images[0],
          }));
          if (state.offset && state.offset > 0) {
            state.products.push(...newProducts);
          } else {
            state.products = newProducts;
          }
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchCategories.fulfilled,
        (state, action: PayloadAction<Category[]>) => {
          state.status = "succeeded";
          state.categories = action.payload as Array<{
            id: number;
            title: string;
          }>;
        }
      )
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
    builder
      .addCase(
        loadMoreProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.status = "succeeded";
          const newProducts = action.payload.map((item) => ({
            id: item.id,
            title: item.title,
            price: item.price,
            imageUrl: item.images[0],
          }));
          state.products.push(...newProducts);
        }
      )
      .addCase(loadMoreProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const { setCategory, incrementOffset, setQuery, resetCatalogState } =
  catalogSlice.actions;
export default catalogSlice.reducer;
