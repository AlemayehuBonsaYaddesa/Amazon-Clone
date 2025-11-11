import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../Currency/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";

function ProductCard({ product, flex, renderDesc }) {
  //   console.log(product);
  return (
    <div
      className={`${classes.card__container} ${
        flex ? classes.product_flexed : ""
      }`}
    >
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt="no" />
      </Link>
      <div>
        <h3 style={{ maxWidth: "680px" }}>{product.title}</h3>
        {renderDesc && (
          <div style={{ maxWidth: "680px" }}>{product.description}</div>
        )}
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
