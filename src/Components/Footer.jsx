import React from "react";
import styled from "styled-components";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.h1``;
const Desc = styled.p``;
const SocialContainer = styled.div``;
const SocialIcon = styled.div``;

const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>eCOM.</Logo>
        <Desc>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam earum
          deserunt ratione ad nulla atque officia soluta voluptates. Sed,
          soluta.
        </Desc>
      </Left>
      <SocialContainer>
        <SocialIcon>
          <AiFillFacebook />
        </SocialIcon>
        <SocialIcon>
          <AiFillInstagram />
        </SocialIcon>
        <SocialIcon>
          <AiFillTwitterSquare />
        </SocialIcon>
      </SocialContainer>
      <Center></Center>
      <Right></Right>
    </Container>
  );
};

export default Footer;
