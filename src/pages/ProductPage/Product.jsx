import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addProduct } from "../../components/redux/cartSlice";
import { Add, Remove } from "@material-ui/icons";
import { Announcement, Footer, Header, Newsletter } from "../../components";
import {
  Container,
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
  AmountContainer,
  ProdButton,
} from "./Product.styled";
import { useGetProductQuery } from "../../Services/apiCalls";

const Product = () => {
  const productId = useParams();
  const [product, setProduct] = useState({});
  const [amount, setAmount] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYyM2MzOGVjMmRlYjI5OGVmMjI1YTkiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MzQyODg3NDEsImV4cCI6MTYzNDU0Nzk0MX0.4E-S-dFYYZFAyeuG2G12sAOr8DjykptHnR16Wkpah_w";

  const handleClick = (type) => () => {
    type == "dec" ? amount > 1 && setAmount(amount - 1) : setAmount(amount + 1);
  };
  const handleColor = (ev) => {
    setColor(ev.target.attributes.color.value);
  };
  const handleSize = (ev) => {
    console.log(ev.target.value);
    setSize(ev.target.value);
  };
  const addToCart = () => {
    const prodCartID = uuidv4();
    //product, amount, color, size
    //product: [], quantity: 0, total: 0,
    dispatch(
      addProduct({
        ...product,
        prodCartID,
        color,
        size,
        amount,
      })
    );
  };

  const { data, error, isLoading } = useGetProductQuery(productId["id"], {});

  useEffect(() => {
    if (data) {
      setProduct(data);
    }
  }, [data]);

  return (
    <Container>
      <Header />
      <Announcement />
      <ProductWrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={handleColor} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={handleSize}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={handleClick("dec")} />
              <Amount>{amount}</Amount>
              <Add onClick={handleClick("inc")} />
            </AmountContainer>
            <ProdButton onClick={addToCart}>ADD TO CART</ProdButton>
          </AddContainer>
        </InfoContainer>
      </ProductWrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
