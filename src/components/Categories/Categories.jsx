import React from "react";
import { Container } from "./Categories.styled";
import CategoryItem from "../CategoryItem/CategoryItem";

const Categories = ({ categories }) => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} />
      ))}
    </Container>
  );
};

export default Categories;
