import React, { useContext, useState } from "react";
import Layout from "../../Components/LayOut/Layout";
import classes from "./Payment.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/Currency/CurrencyFormat";
import axiosInstance from "../../API/axios";
import { ClipLoader } from "react-spinners";
import { db } from "../../Utility/firebase";
function Payment() {
  const [cardError, setcardError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const [{ user, basket }] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  // Price
  const total = basket.reduce(
    (amount, item) => item.price * item.amount + amount,
    0
  );

  const elements = useElements();
  const stripe = useStripe();

  const handleChange = (e) => {
    setcardError(e?.error ? e.error.message : "");
  };
  const handlePayment = async (e) => {
    e.preventDefault();

    //step 1,  backend || function = > to contact the client secret
    try {
      setProcessing(true);
      const response = await axiosInstance.post(
        `/payments/create?total=${total * 100}`
      );
      // console.log(response.data);
      //step 2, client side || confirm the card payment
      const clientSecret = response.data?.client_secret;
      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      console.log(paymentIntent);

      //step 3, if payment successfull , we need to store the order in database and clear the basket
      // await db.collection("users").doc(user?.uid);

      setProcessing(false);
    } catch (error) {
      console.log(error);
      setProcessing(false);
    }
  };

  return (
    <Layout>
      {/* Header */}
      <div className={classes.payment__header}>Checkout({totalItem}) items</div>
      {/* Payment Methods */}
      <section className={classes.payment}>
        {/* address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <hr />

        {/* Products */}
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket.map((item, i) => (
              <ProductCard product={item} flex={true} key={i} />
            ))}
          </div>
        </div>
        <hr />
        {/* card form */}
        <div className={classes.flex}>
          <h3>Payment Methods</h3>
          <div className={classes.payment__card__container}>
            <div className={classes.payment__details}>
              <form onSubmit={handlePayment}>
                {/* error */}
                <small
                  style={{ color: "red", padding: "5px", marginBottom: "5px" }}
                >
                  {cardError}
                </small>
                {/* card */}
                <CardElement onChange={handleChange} />
                {/* Price */}
                <div className={classes.payment__price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      Total Order {totalItem} |<CurrencyFormat amount={total} />{" "}
                    </span>
                  </div>
                </div>
                <button type="submit">
                  {processing ? (
                    <>
                      <ClipLoader size={10} color={"#000000ff"} />{" "}
                      {"Please wait ..."}
                    </>
                  ) : (
                    "Buy Now"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Payment;
