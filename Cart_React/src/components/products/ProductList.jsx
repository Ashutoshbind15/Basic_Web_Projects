import React from "react";
import Product from "./Product";

const ProductList = ({ products, searchField }) => {
  return (
    <>
      <h1>ProductList</h1>
      <div className="flex flex-wrap">
        {products.map((el) => (
          <Product product={el} key={el.id} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
