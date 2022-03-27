import ProductItemForm from "./ProductItemForm";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <section>
      <div className={classes.product}>
        <div>
          <div className={classes.image}>
            <img src={props.image} alt='product' />
          </div>
          <div className={classes.title}>{props.name}</div>
          {/* <div classeName={classes.description}>{props.description}</div> */}
          <div classeName={classes.price}>{price}</div>
        </div>
        <div>
          <ProductItemForm id={props.id} />
        </div>
      </div>
    </section>
  );
};

export default ProductItem;
