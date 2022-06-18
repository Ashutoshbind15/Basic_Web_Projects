import React from "react";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { cartActions } from "../../reducers/cartReducer";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addToCart(product));
  };

  return (
    <div className="my-3">
      {product.title}{" "}
      <Button onClick={addToCartHandler} className="bg-orange-400 w-40">
        Add
      </Button>
    </div>
  );
};

export default Product;
