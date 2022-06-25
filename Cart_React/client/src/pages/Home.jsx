import ProductList from "../components/products/ProductList";

import { useState } from "react";
import { useEffect } from "react";
import Header from "../components/UI/Header";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../reducers/cartReducer";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("https://ecom-backend1.herokuapp.com/");
      setProducts(data);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCart = async () => {
      if (user) {
        const { data } = await axios.get(
          `https://ecom-backend1.herokuapp.com/users/${user.id}/cart`
        );
        dispatch(cartActions.setCart(data));
      }
    };

    fetchCart();
  }, [dispatch, user?.id, user]);

  useEffect(() => {
    const newArray = products.filter(
      (el) =>
        el.description.toLowerCase().includes(searchInput) ||
        el.title.toLowerCase().includes(searchInput)
    );
    setFilteredProducts(newArray);
  }, [searchInput, products]);

  const inputChangeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="p-4">
      <Header
        inputChangeHandler={inputChangeHandler}
        searchInput={searchInput}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Home;
