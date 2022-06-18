import ProductList from "../components/products/ProductList";

import data from "../product_dummy_data.json";

import { useState } from "react";
import { useEffect } from "react";
import Header from "../components/UI/Header";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState(data.products);

  useEffect(() => {
    const filteredProducts = data.products.filter(
      (el) =>
        el.description.toLowerCase().includes(searchInput) ||
        el.title.toLowerCase().includes(searchInput)
    );
    setProducts(filteredProducts);
  }, [searchInput]);

  const inputChangeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="p-4">
      <Header
        inputChangeHandler={inputChangeHandler}
        searchInput={searchInput}
      />
      <ProductList products={products} />
    </div>
  );
};

export default Home;
