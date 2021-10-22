import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "../Product/Product";
import {
  useGetByCategoryQuery,
  useGetAllProductsQuery,
} from "../../Services/apiCalls";

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const {
    data: productsByCategories,
    error: categoryError,
    isLoading: isBycategoryLoading,
  } = useGetByCategoryQuery(category, { skip: category ? false : true });

  const {
    data: AllProducts,
    error: allProductsError,
    isLoading: isAllProductsLoading,
  } = useGetAllProductsQuery(null, { skip: category ? true : false });

  useEffect(() => {
    if (category) {
      if (productsByCategories) {
        setProducts(productsByCategories);
      }
    } else {
      if (AllProducts) {
        setProducts(AllProducts);
      }
    }
  }, [category, productsByCategories, AllProducts]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filters]);

  useEffect(() => {
    sort == "newest" &&
      setFilteredProducts((item) =>
        item.sort((a, b) => a.createdAt - b.createdAt)
      );
    sort == "asc" &&
      setFilteredProducts((item) =>
        [...item].sort((a, b) => a.price - b.price)
      );
    sort == "desc" &&
      setFilteredProducts((item) =>
        [...item].sort((a, b) => b.price - a.price)
      );
  }, [sort]);

  return (
    <Container>
      {category
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products.map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export default Products;
