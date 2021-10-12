import React from "react";
import { Container, Image, Info, Title } from "./CategoryItem.styled";
import { Button } from "../shared";
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button primary>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
