import React from "react";
import { Container, Image, Info, Title } from "./CategoryItem.styled";
import { Button } from "../shared";
import { Link as LinkR } from "react-router-dom";
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <LinkR to={`/products/${item.category}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button primary>SHOP NOW</Button>
        </Info>
      </LinkR>
    </Container>
  );
};

export default CategoryItem;
