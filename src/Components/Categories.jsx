import React from "react";
import { categoriesData } from "../data";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";


const Container = styled.div`
  display: flex;
  padding 20px;
`;

const Categories = ({item}) => {
  return (
    <Container>
      {categoriesData.map((item) => {
        <CategoryItem item={item} />;
      })}
    </Container>
  );
};

export default Categories;
