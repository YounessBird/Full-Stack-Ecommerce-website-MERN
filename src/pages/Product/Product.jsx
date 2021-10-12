import React from "react";
import { Add, Remove } from "@material-ui/icons";
import { Announcement, Footer, Header, Newsletter } from "../../components";
import { Button } from "../../components/shared";
import {
  Container,
  Header,
  Announcement,
  ProductWrapper,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Price,
  FilterContainer,
  Filter,
  FilterTitle,
  FilterColor,
  FilterSize,
  FilterSizeOption,
  AddContainer,
  Amount,
  ProdButton,
} from "./Product.styled";

const Product = () => {
  return (
    <Container>
      <Header />
      <Announcement />
      <ProductWrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            molestiae. Cum incidunt quam aspernatur dolores odio sequi.
            Similique aliquam voluptate eos, mollitia dolorem non placeat sed
            eligendi nulla optio sequi!
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <ProdButton>ADD TO CART</ProdButton>
          </AddContainer>
        </InfoContainer>
      </ProductWrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
