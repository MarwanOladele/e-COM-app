import React from "react";

import styled from "styled-components";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`;

const Arrow = styled.div`
  font-size: 20px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  height: 100%;
`;



const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <AiOutlineArrowLeft />
      </Arrow>
      <Wrapper>

      </Wrapper>
      <Arrow direction="right">
        <AiOutlineArrowRight />
      </Arrow>
    </Container>
  );
};

export default Slider;
