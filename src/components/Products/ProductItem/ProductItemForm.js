import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./ProductItemForm.module.css";

const ProductItemForm = (props) => {
  const [valid, setValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountAsNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountAsNumber < 1 ||
      enteredAmountAsNumber > 5
    ) {
      setValid(false);
      return;
    }
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
      {!valid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default ProductItemForm;
