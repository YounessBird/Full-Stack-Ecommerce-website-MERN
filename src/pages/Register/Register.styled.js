import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { mobile } from "../../components/style/Responsive";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
`;
export const RegContainer = styled.div`
  background-color: white;
  width: 40%;
  padding: 20px;
  ${mobile({ width: "75%" })}
`;
export const RegisterForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 10px;
  margin: 20px 10px 0 0;
`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
export const Agreement = styled(LinkR)`
  font-size: 12px;
  margin: 20px 0px;
`;
