import React, { useContext, useEffect, useState } from "react";
import Layout from "../../Components/LayOut/Layout";
import { db } from "../../Utility/firebase";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import classes from "./Orders.module.css";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import ProductCard from "../../Components/Product/ProductCard";

function Orders() {
  const [{ user }] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user) return; // wait for user to load!

    const q = query(
      collection(db, "users", user.uid, "orders"),
      orderBy("created", "desc")
    );

    const unsub = onSnapshot(q, (snapshot) => {
      setOrders(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    return () => unsub();
  }, [user]);

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.orders__containers}>
          <h2>Your Orders</h2>
          {orders?.length === 0 && (
            <p style={{ padding: "20px" }}>No orders placed yet.</p>
          )}

          <div>
            {orders?.map((eachOrder, i) => (
              <div key={i}>
                <hr />
                <p>Order ID : {eachOrder?.id}</p>
                {eachOrder?.data?.basket?.map((order) => (
                  <ProductCard key={order.id} product={order} flex={true} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Orders;
