import React from "react";
import { useSelector } from "react-redux";
import Button from "../UI/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="flex  items-center justify-between m-4">
      <div>
        <h1 className="font-bold text-3xl tracking-wide">
          <Link to="/">Shopping Cart</Link>
        </h1>
      </div>

      <Link to="/cart">
        <Button className=" hover:text-white search px-12 flex items-center justify-between">
          <ShoppingCartIcon />
          <span className="px-2">Cart</span>
          <span>{cart.length}</span>
        </Button>
      </Link>
    </div>
  );
};

export default Navbar;
