import { cartActions } from "../reducers/cartReducer";
import axios from "axios";

export const updateCart =
  ({ product, amount, index, isInCart, userId, stock }) =>
  async (dispatch) => {
    try {
      if (isInCart) {
        dispatch(cartActions.updateAmount({ index, amt: amount, stock }));

        await axios.patch(
          `https://ecom-backend1.herokuapp.com/users/${userId}/updatecart`,
          {
            product,
            stock,
            amount,
          }
        );
      } else {
        dispatch(cartActions.addToCart({ product, amt: amount, stock }));
        await axios.patch(
          `https://ecom-backend1.herokuapp.com/users/${userId}/updatecart`,
          {
            product,
            stock,
            amount,
          }
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
