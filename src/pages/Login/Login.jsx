import React from "react";
import { Button } from "../../components/shared";
import { Link as LinkR } from "react-router-dom";
import {
  Container,
  LoginContainer,
  Title,
  Form,
  Input,
  FormLinks,
} from "./Login.styled";

const Login = () => {
  return (
    <Container>
      <LoginContainer>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <FormLinks>FORGOT PASSWORD?</FormLinks>
          <FormLinks>CREATE A NEW ACCOUNT</FormLinks>
        </Form>
      </LoginContainer>
    </Container>
  );
};

export default Login;
