import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../Currency/CurrencyFormat";
import classes from "./Product.module.css";

function ProductCard({ product }) {
  //   console.log(product);
  return (
    <div className={`${classes.card__container}`}>
      <a href="">
        <img src={product.image} alt="" />
      </a>
      <div>
        <h3>{product.title}</h3>
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={product.rating.rate} precision={0.1} />
          {/* Count */}
          <small>{product.rating.count}</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={product.price} />
        </div>
        <button className={classes.button}>add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
