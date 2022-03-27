import React, { Fragment } from "react";
import AvailableProducts from "./AvailableProducts";
import ProductSummary from "./ProductSummary";

const Products = () => {
  return (
    <Fragment>
      <ProductSummary />
      <AvailableProducts />
    </Fragment>
  );
};

export default Products;
