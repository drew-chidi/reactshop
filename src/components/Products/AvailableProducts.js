import React, { useState, useEffect } from "react";
import { URL } from "../../api/BaseApi";
import Card from "../UI/Card";

import classes from "./AvailableProducts.module.css";
import ProductItem from "./ProductItem/ProductItem";

const AvailableProducts = () => {
  const [products, setProducts] = useState([]);
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
    try {
      // after this line, our function will wait for the `fetch()` call to be settled
      // the `fetch()` call will either return a Response or throw an error
      const response = await fetch(`${URL}`);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      // after this line, our function will wait for the `response.json()` call to be settled
      // the `response.json()` call will either return the JSON object or throw an error
      const json = await response.json();
      console.log(json);
      setProducts(json);
    } catch (error) {
      console.error(`Could not get products: ${error}`);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <section className={classes.products}>
      <Card>
        <ul>{productList}</ul>
      </Card>
    </section>
  );
};

export default AvailableProducts;
