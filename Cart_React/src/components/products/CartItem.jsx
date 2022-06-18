import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../reducers/cartReducer";
import Button from "../UI/Button";
const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const index = cart.findIndex((el) => el.id === product.id);

  const AdditionHandler = () => {
    dispatch(cartActions.updateAmount({ index, amt: 1 }));
  };
  const SubtractionHandler = () => {
    dispatch(cartActions.updateAmount({ index, amt: -1 }));
  };

  return (
    <div className="shadow">
      <h1>{product.title}</h1>
      <h1>{product.description}</h1>
      <h1>{product.amount}</h1>
      {cart[index].amount < product.stock && (
        <Button onClick={AdditionHandler}>Add</Button>
      )}
      <Button onClick={SubtractionHandler}>Sub</Button>
    </div>
  );
};

export default CartItem;
