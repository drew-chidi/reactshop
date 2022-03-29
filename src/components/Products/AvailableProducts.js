import React, { useState, useEffect } from "react";
import { URL } from "../../api/BaseApi";
import Card from "../UI/Card";

import classes from "./AvailableProducts.module.css";
import ProductItem from "./ProductItem/ProductItem";

const AvailableProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  const productList = products.map((product) => (
    <ProductItem
      id={product.id}
      key={product.id}
      name={product.title}
      description={product.description}
      price={product.price}
      image={product.image}
      rating={product.rating}
    />
  ));

  const getAllProducts = async () => {
    // after this line, our function will wait for the `fetch()` call to be settled
    // the `fetch()` call will either return a Response or throw an error
    const response = await fetch(`${URL}`);
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    // after this line, our function will wait for the `response.json()` call to be settled
    // the `response.json()` call will either return the JSON object or throw an error
    const json = await response.json();
    setProducts(json);
    setLoading(false);
  };

  useEffect(() => {
    getAllProducts().catch((error) => {
      setLoading(false);
      setErrorMessage(error.message);
    });
  }, []);

  if (loading) {
    return (
      <section className={classes.loading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (errorMessage) {
    return (
      <section className={classes.error}>
        <p>{errorMessage}</p>
      </section>
    );
  }

  return (
    <section className={classes.products}>
      <Card>
        <ul>{productList}</ul>
      </Card>
    </section>
  );
};

export default AvailableProducts;
