import React from "react";
import styled from "styled-components";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillPhone,
  AiFillMail,
} from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  font-weight: 700px;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  margin-right: 20px;
`;

const Center = styled.div`
  padding: 20px;

  flex: 1;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItems = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
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
        <SocialContainer>
          <SocialIcon color="3B5999">
            <AiFillFacebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <AiFillInstagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <AiFillTwitterSquare />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItems>Home</ListItems>
          <ListItems>Cart</ListItems>
          <ListItems>Man Fashion</ListItems>
          <ListItems>Woman Fashion</ListItems>
          <ListItems>Accessories</ListItems>
          <ListItems>My Account</ListItems>
          <ListItems>order Tracking</ListItems>
          <ListItems>Wishlist</ListItems>
          <ListItems>Terms</ListItems>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <FaMapMarkerAlt style={{ marginRight: "10px" }} /> 26, Adebare Adeyemo
          Avenue, Akesan Lagos
        </ContactItem>
        <ContactItem>
          <AiFillPhone style={{ marginRight: "10px" }} /> +234 705 857 3243
        </ContactItem>
        <ContactItem>
          <AiFillMail style={{ marginRight: "10px" }} /> oladelemarwan@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
