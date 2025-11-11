import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";
import { productUrl } from "../../API/endPoint";
import Loader from "../Loader/Loader";

function Product() {
  const [products, setProduct] = useState();
  const [isloading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${productUrl}/products`)
      .then((resp) => {
        setProduct(resp.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    // fetching each single product and rendering using props
    <>
      {isloading ? (
        <Loader />
      ) : (
        <section className={classes.product__container}>
          {products &&
            products.map((singleProduct, i) => {
              return <ProductCard product={singleProduct} key={i} />;
            })}
        </section>
      )}
    </>
  );
}

export default Product;
