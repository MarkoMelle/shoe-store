import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  name: string;
  size: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const localStorageData = localStorage.getItem("cart");
const initialState: CartState = localStorageData
  ? { items: JSON.parse(localStorageData) }
  : { items: [] };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const index = state.items.findIndex(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );

      if (index !== -1) {
        state.items[index].quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      const newState = state.items.filter(
        (item) =>
          item.id !== action.payload.id || item.size !== action.payload.size
      );
      state.items = newState;
      localStorage.setItem("cart", JSON.stringify(newState));
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
