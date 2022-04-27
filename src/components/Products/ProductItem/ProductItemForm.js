import React, { useRef } from "react";
import Input from "../../UI/Input";
import classes from "./ProductItemForm.module.css";

const ProductItemForm = (props) => {
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountAsNumber = +enteredAmount;
    props.onAddToCart(enteredAmountAsNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={submitHandler}>Add</button>
    </form>
  );
};

export default ProductItemForm;
