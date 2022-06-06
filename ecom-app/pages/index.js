import React from "react";
import { HeroBanner, Footer, products } from "../components/index";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best selling products</h2>
        <p>Speakers of many variation</p>
      </div>
      <div className="products-heading">
        {["Product 1", "Product 2"].map((product) => product)}
      </div>
      <Footer />
    </>
  );
};

export default Home;
