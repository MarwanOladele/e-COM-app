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
  min-width: 24%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5fbfd;
`;
const Image = styled.img`
  height: 75%;
  width: 100%;
  object-fit: cover;
`;
const Info = styled.div``;
const Icon = styled.div``;

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
