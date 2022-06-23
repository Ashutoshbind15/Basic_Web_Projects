import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../reducers/cartReducer";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";

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
    <div className="shadow-md px-10 flex my-4 py-6">
      <div>
        <h1 className="text-lg font-medium">{product.title}</h1>
        <img src={product.thumbnail} className="h-32 sm:44 md:h-52" alt="" />
      </div>
      <div className="flex flex-col justify-between py-4 px-6">
        <h1>{product.description}</h1>
        <div className="flex py-2">
          <Button
            variant="outlined"
            color="error"
            size="small"
            onClick={SubtractionHandler}
          >
            <RemoveIcon color="action" />
          </Button>
          <h1 className="p-3 md:p-4 border border-blck rounded-md font-medium">
            {product.amount}
          </h1>
          {cart[index].amount < product.stock && (
            <Button
              size="small"
              variant="outlined"
              color="success"
              onClick={AdditionHandler}
            >
              <AddIcon color="primary" />
            </Button>
          )}
        </div>
        <div>
          {cart.length && (
            <h1 className="py-2 font-medium">
              ${product.amount * product.price}
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
