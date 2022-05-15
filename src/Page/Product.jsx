import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: %0px;
  display: flex;
`;
const ImgCOntainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding
`;
const Tittle = styled.div``;
const Desc = styled.div``;
const Price = styled.div``;

const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgCOntainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgCOntainer>
        <InfoContainer>
          <Tittle>Jumpsuit</Tittle>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nobis
            eos harum ducimus nostrum esse sint impedit, ullam modi sit!
          </Desc>
          <Price>$ 20</Price>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
