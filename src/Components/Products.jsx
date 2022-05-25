import React from "react";
import styled from "styled-components";
import { productData } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  //   padding 20px;
  justify-content: space-between;
  //   align-items: center;
`;

const Products = ({ cat, filter, sort }) => {
  console.log(cat, sort, filter);
  return (
    <Container>
      {productData.map((item) => {
        return <Product key={item.id} {...item} />;
      })}
    </Container>
  );
};

export default Products;
