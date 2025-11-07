import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";

function Product() {
  const [products, setProduct] = useState();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((resp) => setProduct(resp.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <section className={classes.product__container}>
      {products &&
        products.map((singleProduct, i) => {
          return <ProductCard product={singleProduct} key={i} />;
        })}
    </section>
  );
}

export default Product;
