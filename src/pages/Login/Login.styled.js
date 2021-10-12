import styled from "styled-components";
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
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
`;
export const LoginContainer = styled.div`
  background-color: white;
  width: 25%;
  padding: 20px;
  ${mobile({ width: "75%" })}
`;
export const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 300;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  flex: 1;
  padding: 10px;
  margin: 10px 0px;
`;
export const FormLinks = styled(LinkR)`
  margin: 5px 0px;
  font-size: 12px;
  cursor: pointer;
`;
