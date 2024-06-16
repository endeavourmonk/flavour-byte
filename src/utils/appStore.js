import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

export const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
