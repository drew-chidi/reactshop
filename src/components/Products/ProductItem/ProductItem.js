import { useContext } from "react";

import ProductItemForm from "./ProductItemForm";
import classes from "./ProductItem.module.css";
import CartContext from "../../../store/cart-context";

const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const onAddToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <section>
      <div className={classes.product}>
        <div>
          <div className={classes.image}>
            <img src={props.image} alt='product' />
          </div>
          <div className={classes.title}>{props.name}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div>
          <ProductItemForm onAddToCart={onAddToCartHandler} />
        </div>
      </div>
    </section>
  );
};

export default ProductItem;
