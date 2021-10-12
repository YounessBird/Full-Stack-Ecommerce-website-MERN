import React from "react";
import { Link as LinkR } from "react-router-dom";
import { Button } from "../../components/shared";
import {
  Container,
  RegContainer,
  Title,
  RegisterForm,
  Input,
  Agreement,
} from "./Register.styled";

const Register = () => {
  return (
    <Container>
      <RegContainer>
        <Title>CREATE AN ACCOUNT</Title>
        <RegisterForm>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with{" "}
            <LinkR style={{ fontWeight: "bold" }}>the PRIVACY POLICY</LinkR>
          </Agreement>
          <Button>CREATE</Button>
        </RegisterForm>
      </RegContainer>
    </Container>
  );
};

export default Register;
