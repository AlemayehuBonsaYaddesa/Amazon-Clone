import React, { useEffect, useState } from "react";
import Layout from "../../Components/LayOut/Layout";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../Components/Product/ProductCard";
import { productUrl } from "../../API/endPoint";
import Loader from "../../Components/Loader/Loader";

function ProductDetail() {
  const { productId } = useParams();
  const [details, setDetail] = useState();
  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((resp) => {
        setDetail(resp.data);
      })
      .catch((err) => console.log(err));
  }, [productId]);

  // console.log(details);
  return (
    <Layout>
      <div>
        {details ? (
          <>
            <p style={{ padding: "30px" }}>
              {" "}
              <Link to={`/`}>Category </Link> /{" "}
              <Link to={`/category/${details.category}`}>
                {details.category}
              </Link>
            </p>
            <ProductCard
              product={details}
              flex={true}
              renderDesc={true}
              renderAdd={true}
            />
          </>
        ) : (
          <Loader />
        )}
      </div>
    </Layout>
  );
}

export default ProductDetail;
