import React from "react";
import { useSelector } from "react-redux";
import Button from "../UI/Button";

const Navbar = (props) => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="flex  items-center">
      <div>Navbar</div>

      <input
        type="text"
        name=""
        id=""
        className="border-gray-600 border-2 mr-auto w-4/12 ml-10 rounded-full px-2 py-0.5 transition-all focus:scale-110 outline-none "
        placeholder="Search"
        onChange={props.inputChangeHandler}
        value={props.searchInput}
      />

      <div>
        <Button className="ml-auto hover:text-white search">
          {" "}
          <span>{cart.length}</span> Cart
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
