import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useNavigate } from "react-router-dom";
// import { userActions } from "../../reducers/userReducer";
import { Avatar } from "@mui/material";
import { cartActions } from "../../reducers/cartReducer";
import { logoutUser } from "../../actions/userActions";

const Navbar = (props) => {
  const cart = useSelector((state) => state.cart.cart);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="md:flex items-center justify-between m-3 md:m-4">
      <div className="mb-3 md:mb-0">
        <h1 className="text-center font-bold text-2xl md:text-3xl tracking-wide md:text-left">
          <Link to="/">Shopping Cart</Link>
        </h1>
      </div>

      <div className="flex justify-around md:flex items-center">
        {user && (
          <div className="mr-2 flex items-baseline">
            <div className="mr-2">
              <Avatar sx={{ bgcolor: "#17b2d9" }}>
                <h2>{user.username[0]}</h2>
              </Avatar>
            </div>
            <h2>{user.username}</h2>
          </div>
        )}
        {!user ? (
          <Link to="/auth">
            <Button className=" mr-3 hover:text-white search px-12 flex items-center justify-between">
              Signin
            </Button>
          </Link>
        ) : (
          <Button
            className="mr-3 hover:text-white search px-12 flex items-center justify-between"
            onClick={() => {
              dispatch(logoutUser());
              dispatch(cartActions.freeCart());
            }}
          >
            Logout
          </Button>
        )}

        <Button
          className=" hover:text-white search px-12 flex items-center justify-between"
          onClick={() => {
            if (user) {
              navigate("/cart");
            } else {
              navigate("/auth");
            }
          }}
        >
          <ShoppingCartIcon />
          <span className="px-2">Cart</span>
          <span>{cart.length}</span>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
