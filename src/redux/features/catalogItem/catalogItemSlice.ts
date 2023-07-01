import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiClient } from "../../../api/apiClient";



export interface ProductState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
  product: {
    name: string;
    imageSrc: string;
    details: [string, string][];
    sizes: { value: string; selected: boolean }[];
    quantity: number;
    id: number;
    price: number;
  };
}

const initialState: ProductState = {
  status: "idle",
  error: null,
  product: {
    name: "",
    imageSrc: "",
    details: [],
    sizes: [],
    quantity: 1,
    id: 0,
    price: 0,
  },
};

interface FetchProductResponse {
  name: string;
  imageSrc: string;
  details: [string, string][];
  sizes: { value: string; selected: boolean }[];
  quantity: number;
  id: number;
  price: number;
}
interface ApiResponse {
  title: string;
  images: string[];
  manufacturer: string;
  sku: string;
  color: string;
  material: string;
  reason: string;
  season: string;
  sizes: { size: string; available: boolean }[];
  price: number;
}

export const fetchProductById = createAsyncThunk<
  FetchProductResponse,
  number,
  { rejectValue: string }
>("product/fetchByIdStatus", async (productId: number) => {
  try {
    const response = await apiClient.getItemById(productId);
    if (!response.ok) {
      console.error("Response not OK, status:", response.status);
      throw new Error("Не удалось загрузить товар");
    }
    const data: ApiResponse = await response.json();
    return {
      name: data.title,
      imageSrc: data.images[0],
      details: [
        ["Артикул", data.sku],
        ["Производитель", data.manufacturer],
        ["Цвет", data.color],
        ["Материал", data.material],
        ["Сезон", data.season],
        ["Повод", data.reason],
      ],
      sizes: data.sizes
        .filter((size) => size.available)
        .map((size) => ({ value: size.size, selected: false })),
      quantity: 1,
      id: productId,
      price: data.price,
    };
  } catch (error) {
    console.error("Error in fetchProductById:", error);
    throw error;
  }
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    incrementQuantity(state) {
      if (state.product.quantity < 10) state.product.quantity += 1;
    },
    decrementQuantity(state) {
      if (state.product.quantity > 1) {
        state.product.quantity -= 1;
      }
    },
    setProductSizes(
      state,
      action: PayloadAction<Array<{ value: string; selected: boolean }>>
    ) {
      state.product.sizes = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductById.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.product = action.payload;
    });
    builder.addCase(fetchProductById.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const { incrementQuantity, decrementQuantity, setProductSizes } =
  productSlice.actions;

export default productSlice.reducer;
