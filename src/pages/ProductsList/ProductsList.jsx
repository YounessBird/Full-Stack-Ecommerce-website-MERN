import React, { useState } from "react";
import styled from "styled-components";
import { useLocation, useParams } from "react-router-dom";
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
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState(null);

  const param = useParams();
  const category = param["category"];

  const handleFiltering = (ev) => {
    (ev.target.name == "color" || ev.target.name == "size") &&
      setFilters({
        ...filters,
        [ev.target.name]: ev.target.value,
      });
    ev.target.name == "sort" && setSort(ev.target.value);
  };

  return (
    <Container>
      <Header />
      <Announcement />
      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFiltering}>
            <Option disabled>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name="size" onChange={handleFiltering}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select name="sort" onChange={handleFiltering}>
            <Option value="newest" selected>
              Newest
            </Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products
        products={popularProducts}
        filters={filters}
        sort={sort}
        category={category}
      />
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
