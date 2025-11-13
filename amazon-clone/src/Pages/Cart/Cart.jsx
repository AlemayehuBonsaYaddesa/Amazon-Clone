import React, { useContext } from "react";
import LayOut from "../../Components/LayOut/Layout";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import numeral from "numeral";
import { Link } from "react-router-dom";
import classes from "./Cart.module.css";
import { Type } from "../../Utility/action.type";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
export default function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce(
    (amount, item) => item.price * item.amount + amount,
    0
  );

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };
  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_CART,
      id,
    });
  };
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
                <section className={classes.product_card}>
                  <ProductCard
                    product={item}
                    renderDesc={true}
                    flex={true}
                    key={i}
                    renderAdd={false}
                  />
                  <div className={classes.button_container}>
                    <button
                      className={classes.btn}
                      onClick={() => increment(item)}
                    >
                      <MdOutlineKeyboardArrowUp size={20} />
                    </button>
                    <span>{item.amount}</span>
                    <button
                      className={classes.btn}
                      onClick={() => decrement(item.id)}
                    >
                      <MdOutlineKeyboardArrowDown size={20} />
                    </button>
                  </div>
                </section>
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
