import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
  }
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, cartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHanlder = (item) => {
    cartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHanlder = (id) => {
    cartAction({ type: "REMOVE", item: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHanlder,
    removeItem: removeItemFromCartHanlder,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
