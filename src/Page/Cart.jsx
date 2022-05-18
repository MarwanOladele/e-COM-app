import React from "react";
import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 500;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;
const Summary = styled.div`
  flex: 1;
`;

const Cart = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://www.freepnglogos.com/uploads/t-shirt-png/t-shirt-png-create-shirt-product-mockups-with-gimp-logos-nick-8.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> MARWAN OLADELE SHOE
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 346375638746
                  </ProductId>
                  <ProductColor />
                  <ProductSize>
                    <b>Size:</b>37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                price
              </PriceDetail>
            </Product>
          </Info>
          <Summary>Summary</Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
