import React from "react";
import Product from "./Product";

const ProductList = ({ products, searchField }) => {
  return (
    <>
      <h1>ProductList</h1>
      <ul>
        {products.map((el) => (
          <Product product={el} key={el.id} />
        ))}
      </ul>
    </>
  );
};

export default ProductList;
