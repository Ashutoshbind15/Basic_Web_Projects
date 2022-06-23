import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/products/CartItem";
import Button from "../components/UI/Button";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  let total = 0;

  for (let item of cart) {
    total += item?.amount * item?.price;
  }

  return (
    <>
      <div className="my-4">
        {cart.map((el) => (
          <CartItem product={el} key={el.id} />
        ))}
      </div>

      {cart.length ? (
        <div className="flex items-center justify-between px-4 text-xl my-2 shadow-md py-4 mb-3">
          <h1 className="font-bold">Total Amount: ${total}</h1>
          <Button className="search">Proceed To Checkout</Button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Cart;
