import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItemsToCart(state, action) {
      state.push(action.payload);
    },
    removeItemsFromCart(state) {
      state.length == 0;
    },
  },
});

export const { addItemsToCart, removeItemsFromCart } = cartSlice.actions;
export default cartSlice.reducer;
