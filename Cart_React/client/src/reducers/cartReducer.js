import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push({
        ...action.payload.product,
        amount: action.payload.amt,
        stock: action.payload.stock,
      });
    },
    updateAmount(state, action) {
      state.cart[action.payload.index].amount = action.payload.amt;
      state.cart[action.payload.index].stock = action.payload.stock;
      if (state.cart[action.payload.index].amount === 0) {
        const productId = state.cart[action.payload.index].id;
        state.cart = state.cart.filter((el) => el.id !== productId);
      }
    },
    freeCart(state, action) {
      state.cart = [];
    },
    setCart(state, action) {
      state.cart = action.payload;
    },
  },
});

export default cartSlice.reducer;

export const cartActions = cartSlice.actions;
