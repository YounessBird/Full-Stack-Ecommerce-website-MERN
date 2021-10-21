import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router";

const Success = () => {
  const location = useLocation();
  console.log(location);
  return <Container>"Success ...."</Container>;
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export default Success;
