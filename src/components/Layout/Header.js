import React, { Fragment } from "react";
import headerImage from "../../assets/header.webp";
import CartButton from "./CartButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>REACTSHOP</h1>
        <CartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={headerImage} alt='shop packages' />
      </div>
    </Fragment>
  );
};

export default Header;
