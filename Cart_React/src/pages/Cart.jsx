import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/products/CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  return (
    <div>
      {cart.map((el) => (
        <CartItem product={el} key={el.id} />
      ))}
    </div>
  );
};

export default Cart;
