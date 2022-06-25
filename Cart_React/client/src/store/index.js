import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducers/cartReducer";
import userReducer from "../reducers/userReducer";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});

export default store;
