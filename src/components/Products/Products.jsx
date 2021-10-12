import React from "react";
import styled from "styled-components";
import Product from "../Product/Product";
const Products = ({ products }) => {
  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export default Products;
