import React, { useState } from "react";
import { Button } from "../../components/shared";
import { Link as LinkR } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  LoginContainer,
  Title,
  Form,
  Input,
  FormLinks,
  Error,
} from "./Login.styled";
import { login } from "../../components/redux/apiCall";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const dispatch = useDispatch();
  const { errorMessage, error } = useSelector((state) => state.user);
  const submitForm = (ev) => {
    ev.preventDefault();
    const user = { username: userName, password: userPassword };
    login(dispatch, user);
  };
  return (
    <Container>
      <LoginContainer>
        <Title>SIGN IN</Title>
        <Form onSubmit={submitForm}>
          <Input
            placeholder="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <Button type="submit">LOGIN</Button>
          {error && <Error>{errorMessage}</Error>}
          <FormLinks>FORGOT PASSWORD?</FormLinks>
          <FormLinks>CREATE A NEW ACCOUNT</FormLinks>
        </Form>
      </LoginContainer>
    </Container>
  );
};

export default Login;
