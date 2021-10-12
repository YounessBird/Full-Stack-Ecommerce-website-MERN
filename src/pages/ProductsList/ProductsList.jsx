import React from "react";
import styled from "styled-components";
import { popularProducts } from "../Home/Data";
import {
  Announcement,
  Header,
  Products,
  Newsletter,
  Footer,
} from "../../components";
import { mobile } from "../../components/style/Responsive";

const ProductsList = () => {
  return (
    <Container>
      <Header />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products products={popularProducts} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px; ;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  outline: none;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

export default ProductsList;
