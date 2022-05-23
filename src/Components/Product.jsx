import React from "react";
import styled from "styled-components";
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineHeart,
} from "react-icons/ai";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 300px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5fbfd;
  position: relative;
`;
const Image = styled.img`
  height: 75%;
  width: 100%;
  object-fit: cover;
  // z-index: 2;
`;
const Info = styled.div`
  opacity: 0;
  padding: 10px;
  height: 94%;
  width: 94%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  transition: all 0.9s ease;
  &:hover {
    opacity: 1;
  }
`;
const Icon = styled.div`
  font-size: 30px;
  cursor: pointer;
  margin: 5px;
  height: 50px;
  width: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.9s ease;

  &:hover {
    background-color: gray;
    color: white;
  }
`;

const Product = ({ id, img }) => {
  return (
    <Container>
      <Image src={img} />
      <Info>
        <Icon>
          <AiOutlineShoppingCart />
        </Icon>
        <Icon>
          <AiOutlineSearch />
        </Icon>
        <Icon>
          <AiOutlineHeart />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
