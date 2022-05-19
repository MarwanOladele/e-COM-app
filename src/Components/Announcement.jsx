import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  ${mobile({
    fontSize: "12px",
  })}
`;

const Announcement = () => {
  return (
    <Container>Super Deals! Free Shipping on orders more than $50</Container>
  );
};

export default Announcement;
