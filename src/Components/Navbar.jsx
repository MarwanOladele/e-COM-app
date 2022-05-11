import React from "react";
import styled from "styled-components";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Langauge = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
`;

const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Center>
          <Logo>eCOM.</Logo>
        </Center>
        <Left>
          <Langauge>EN</Langauge>
          <SearchContainer>
            <Input />
            <AiOutlineSearch style={{ color: "gray" , fontSize: '16px'}} />
          </SearchContainer>
        </Left>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGNIN</MenuItem>
          <MenuItem>
            <AiOutlineShoppingCart style={{ fontSize: "20px" }} />
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
