import React from "react";
import classes from "./ProductSummary.module.css";

const ProductSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Your one-stop shop for everything you need</h2>
      <p>Choose from a wide selections of products</p>
      <p>All our products come with waranty</p>
    </section>
  );
};

export default ProductSummary;
