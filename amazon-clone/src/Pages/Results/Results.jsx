import React, { useEffect, useState } from "react";
import Layout from "../../Components/LayOut/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../Components/Product/ProductCard";
import { productUrl } from "../../API/endPoint";
import classes from "./Rwesults.module.css";

function Results() {
  const { categoryName } = useParams();
  const [results, setResults] = useState([]);
  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => setResults(res.data))
      .catch((err) => console.log(err));
  }, []);
  // console.log(results);
  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        <div className={classes.products_container}>
          {results?.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
        </div>
      </section>
    </Layout>
  );
}

export default Results;
