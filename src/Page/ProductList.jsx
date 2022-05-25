import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Products from "../Components/Products";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({
    margin: "0px 20px",
    display: "flex",
    flexDirection: "column",
  })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({
    marginRight: "20px",
  })}
`;

const Select = styled.select`
  padding: 5px;
  margin-right: 20px;
  ${mobile({
    margin: "10px 0px",
  })}
`;

const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("Newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilter({
      ...filter,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Dress</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Product:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>White</Option>
            <Option>BLack</Option>
            <Option>Blue</Option>
            <Option>Orange</Option>
            <Option>Green</Option>
            <Option>Red</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option selected>Size</Option>
            <Option>small</Option>
            <Option>medium</Option>
            <Option>big</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="Newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products {...cat} {...filter} {...sort}/>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
