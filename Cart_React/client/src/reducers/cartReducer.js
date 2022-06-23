import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      console.log("hi");
      console.log(action.payload.product, action.payload.amt);
      state.cart.push({
        ...action.payload.product,
        amount: action.payload.amt,
      });
    },
    updateAmount(state, action) {
      state.cart[action.payload.index].amount += +action.payload.amt;
      if (state.cart[action.payload.index].amount === 0) {
        const productId = state.cart[action.payload.index].id;
        state.cart = state.cart.filter((el) => el.id !== productId);
      }
    },
  },
});

export default cartSlice.reducer;

export const cartActions = cartSlice.actions;
