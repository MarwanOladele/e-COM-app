import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vw;
  background: url("https://images.pexels.com/photos/410487/pexels-photo-410487.jpeg);
`;
const Wrapper = styled.div``;
const Form = styled.form``;
const Title = styled.h1``;
const Input = styled.input``;
const Agreement = styled.span``;
const Button = styled.button``;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
