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
    <div className="my-3 pr-2 w-full md:w-1/2">
      <div className=" shadow rounded-md flex h-full">
        <div className="w-1/2 flex flex-col p-4">
          <img
            src={product.images[0]}
            alt=""
            className="flex-1 max-h-56 md:max-h-64 lg:max-h-80"
          />
        </div>
        <div className="w-1/2 flex justify-between flex-col p-4">
          <h3 className="">{product.title}</h3>
          <div>
            <p>{product.description}</p>
            <div>Rating - {product.rating}</div>
            <div>Price - {product.price}</div>
          </div>
          <Button
            onClick={addToCartHandler}
            className="bg-orange-400 justify-self-end my-3 w-full bottom-0 left-0"
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
