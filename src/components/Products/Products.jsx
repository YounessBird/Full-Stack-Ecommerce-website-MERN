import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "../Product/Product";
const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // first check if cat is changed and then get prods based on cat
    (async () => {
      //   GET PRODUCTS BY CATEGORY
      const getByCategories = await fetch(
        `http://localhost:5000/api/product?category=${category}`
      )
        .then((res) => {
          if (res.ok) return res;
        })
        .then((res) => res.json())
        .catch((err) => err);

      //GET ALL PRODUCTS
      const getAllProducts = await fetch(`http://localhost:5000/api/product`)
        .then((res) => {
          if (res.ok) return res;
        })
        .then((res) => res.json())
        .catch((err) => err);

      category ? setProducts(getByCategories) : setProducts(getAllProducts);
    })();
  }, [category]);

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
