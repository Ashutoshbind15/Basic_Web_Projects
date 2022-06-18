import React from "react";
import Product from "./Product";

const ProductList = ({ products }) => {
  return (
    <>
      <div className="flex flex-wrap sm:px-12 py-6">
        {products.map((el) => (
          <Product product={el} key={el.id} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
