import React, { useEffect, useState } from "react";
import Layout from "../../Components/LayOut/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../Components/Product/ProductCard";
import { productUrl } from "../../API/endPoint";
import classes from "./Rwesults.module.css";
import Loader from "../../Components/Loader/Loader";

function Results() {
  const { categoryName } = useParams();
  const [results, setResults] = useState([]);
  const [isloading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(results);
  return (
    <Layout>
      {isloading ? (
        <Loader />
      ) : (
        <section>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category / {categoryName}</p>
          <hr />
          <div className={classes.products_container}>
            {results?.map((product) => {
              return (
                <ProductCard
                  product={product}
                  key={product.id}
                  renderAdd={true}
                />
              );
            })}
          </div>
        </section>
      )}
    </Layout>
  );
}

export default Results;
