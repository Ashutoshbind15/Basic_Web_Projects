import React, { useEffect } from "react";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
// import { cartActions } from "../../reducers/cartReducer";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateCart } from "../../actions/cartActions";

const Product = ({ product }) => {
  const { user } = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [amt, setAmt] = useState(1);
  const [invalid, setInvalid] = useState(false);

  const foundProductIndex = cart.findIndex((el) => el._id === product._id);

  useEffect(() => {
    if (foundProductIndex !== -1) {
      if (+amt > cart[foundProductIndex]?.stock) {
        setInvalid(true);
      } else {
        setInvalid(false);
      }
    } else {
      if (+amt > product.stock) {
        setInvalid(true);
      } else {
        setInvalid(false);
      }
    }
  }, [amt, cart, foundProductIndex, product.stock]);

  let isOutOfStock;

  if (foundProductIndex !== -1) {
    if (cart[foundProductIndex].stock > 0) {
      isOutOfStock = false;
    } else {
      isOutOfStock = true;
    }
  } else {
    if (product.stock > 0) {
      isOutOfStock = false;
    } else {
      isOutOfStock = true;
    }
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!user) {
      navigate("/auth");
    } else {
      if (foundProductIndex === -1) {
        // dispatch(cartActions.addToCart({ product, amt: +amt }));
        dispatch(
          updateCart({
            product,
            amount: +amt,
            isInCart: false,
            userId: user.id,
            stock: product.stock - +amt,
          })
        );
      } else {
        dispatch(
          updateCart({
            product,
            amount: cart[foundProductIndex]?.amount + +amt,
            userId: user.id,
            isInCart: true,
            index: foundProductIndex,
            stock: cart[foundProductIndex]?.stock - +amt,
          })
        );
        // dispatch(cartActions.updateAmount({ index: foundProductIndex, amt }));
      }
    }
  };

  return (
    <div className="my-3 pr-4 w-full lg:w-1/2">
      <div className="flex shadow-md rounded-md h-full overflow-hidden ">
        <div className="w-1/2 flex flex-col p-4">
          <img
            src={product.images[0]}
            alt=""
            className="flex-1 max-h-56 md:max-h-64 lg:max-h-80"
          />
        </div>
        <div className="w-1/2 flex justify-between flex-col p-4">
          <h3 className="font-medium text-lg">{product.title}</h3>
          <div>
            <p className="py-4">{product.description}</p>
            <div className="hidden md:flex">
              <p>Rating: </p>{" "}
              <Rating value={product.rating} precision={0.1} readOnly />
            </div>
            <p className="md:hidden">Rating: {product.rating}</p>
            <div>Price - ${product.price}</div>
          </div>

          <form
            action=""
            className="flex items-center"
            onSubmit={formSubmissionHandler}
          >
            {!isOutOfStock && !invalid && (
              <Button type="submit" className=" bg-orange-400  my-3 flex-1">
                Add
              </Button>
            )}
            {isOutOfStock && <h2>Out of Stock!!</h2>}
            {!isOutOfStock && invalid && (
              <h2 className="my-3 text-red-600">
                Requested Number of Items not present in stock!
              </h2>
            )}
            {!isOutOfStock && (
              <input
                className="w-1/6 text-center rounded-full border border-black ml-2"
                type="number"
                value={amt}
                onChange={(e) => {
                  setAmt(e.target.value);
                }}
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Product;
