import React from "react";
import styled from "styled-components";
import Announcement from '../Components/Announcement'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Container = styled.div``;

const Cart = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
          <Title>YOUR BAG</Title>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
