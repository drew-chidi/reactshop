import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./CartButton.module.css";
import CartContext from "../../store/cart-context";

const CartButton = (props) => {
  const [animatedButton, setAnimatedButton] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);
  const btnClasses = `${classes.button} ${
    animatedButton ? classes.bump : null
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setAnimatedButton(true);
    const setTimer = setTimeout(() => {
      setAnimatedButton(false);
    }, 300);
    return () => {
      clearTimeout(setTimer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;
