import React from "react";
import { Link as LinkR } from "react-router-dom";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <LinkR to={`/product/${item._id}`} style={{ color: "black" }}>
          <Icon>
            <SearchOutlined />
          </Icon>
        </LinkR>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.2);
  z-index: 3;
  opacity: 0;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 350px;
  min-width: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #f5fbfd;
  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  position: absolute;
  background: white;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export default Product;
