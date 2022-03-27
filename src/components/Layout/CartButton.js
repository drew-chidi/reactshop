import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./CartButton.module.css";
import CartContext from "../../store/cart-context";

const CartButton = (props) => {
  // const cartCtext = useContext();
  // const numberOfCartItems = cartCtext.items.reduce((currentNumber, item) => {
  //   return currentNumber + item.amount;
  // }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      {/* <span className={classes.badge}>{numberOfCartItems}</span> */}
    </button>
  );
};

export default CartButton;
