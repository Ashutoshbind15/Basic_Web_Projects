import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
  },
});

export default cartSlice.reducer;

export const cartActions = cartSlice.actions;