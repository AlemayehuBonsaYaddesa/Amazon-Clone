import React, { useContext } from "react";
import LayOut from "../../Components/LayOut/Layout";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import numeral from "numeral";
import { Link } from "react-router-dom";
import classes from "./Cart.module.css";

export default function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce(
    (amount, item) => item.price * item.amount + amount,
    0
  );

  // console.log(basket);
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart__container}>
          <h2>Hello</h2>
          <h3>Your Shopping Basket</h3>
          <hr />
          {basket?.length == 0 ? (
            <p>Ops You have no items in your cart.</p>
          ) : (
            basket &&
            basket.map((item, i) => {
              return (
                <ProductCard
                  product={item}
                  renderDesc={true}
                  flex={true}
                  key={i}
                  renderAdd={false}
                />
              );
            })
          )}
        </div>
        {basket?.length !== 0 && (
          <div className={classes.Subtotal}>
            <div>
              <p>Subtotal:({basket?.length} items)</p>
              <span>{numeral(total).format("$0,0.00")}</span>
            </div>
            <span>
              <input type="checkbox" name="" id="" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments">Continue to Checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}
