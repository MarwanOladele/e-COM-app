import React from "react";
import { categoriesData } from "../data";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding 20px;
  justify-content: space-between;
  align-items: center;
`;

const Categories = () => {
  return (
    <Container>
      {categoriesData.map((item) => {
        return <CategoryItem key={item.id} {...item} />;
      })}
    </Container>
  );
};

export default Categories;
