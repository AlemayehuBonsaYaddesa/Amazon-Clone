import React from "react";
import Carousels from "../../Components/Carousel/Carousels";
import Category from "../../Components/Category/Category";
import Product from "../../Components/Product/Product";
import Layout from "../../Components/LayOut/Layout";

function Landing() {
  return (
    <Layout>
      <Carousels />
      <Category />
      <Product />
    </Layout>
  );
}

export default Landing;
