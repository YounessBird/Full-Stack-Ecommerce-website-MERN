import React from "react";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";
import { Button } from "../../components/shared";
import { Announcement, Footer, Header, Newsletter } from "../../components";
import { mobile } from "../../components/style/Responsive";

const Cart = () => {
  const Container = styled.div``;

  const CartContainer = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
  `;
  const CartTitle = styled.h1`
    font-weight: 300;
    text-align: center;
  `;
  const CartOptions = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px;
  `;
  const ContinueButton = styled(Button)`
    background-color: coral;
    padding: 10px;
  `;
  const ShoppingFavs = styled.div`
    ${mobile({ display: "none" })}
  `;
  const TopText = styled.span`
    margin-left: 10px;
    text-decoration: underline;
    cursor: pointer;
  `;

  const CheckoutButton = styled(Button)``;
  const CartDashboard = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const Items = styled.div`
    flex: 3;
  `;
  const CartItems = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const Image = styled.img`
    width: 200px;
  `;
  const DescContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;
    flex: 2;
    ${mobile({ flexDirection: "column" })}
  `;
  const ProductName = styled.span``;
  const ProductId = styled.span``;
  const Color = styled.div`
    background-color: ${({ color }) => color};
    width: 30px;
    height: 30px;
    border-radius: 50%;
  `;
  const ProductSize = styled.span``;

  const PriceDetail = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  `;
  const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}
  `;
  const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
  `;
  const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
  `;

  const OrderSummary = styled.div`
    flex: 1;
    border: 0.5px solid lightgrey;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
    /* display: flex;
    flex-direction: column;
    justify-content: space-between; */
  `;
  const SummaryTitle = styled.h1`
    font-weight: 200;
    text-align: center;
  `;
  const SummaryItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 0px;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};
  `;

  const SummaryItemText = styled.span``;
  const SummaryItemPrice = styled.span``;

  return (
    <Container>
      <Header />
      <Announcement />
      <CartContainer>
        <CartTitle>YOUR BAG</CartTitle>
        <CartOptions>
          <ContinueButton>Continue Shopping</ContinueButton>
          <ShoppingFavs>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </ShoppingFavs>
          <CheckoutButton small>CHECKOUT NOW</CheckoutButton>
        </CartOptions>
        <CartDashboard>
          <Items>
            <CartItems>
              <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
              <DescContainer>
                <ProductName>
                  <b>Product:</b> JESSIE THUNDER SHOES
                </ProductName>
                <ProductId>
                  <b>ID:</b> 93813718293
                </ProductId>
                <Color color="black"></Color>
                <ProductSize>
                  <b>Size:</b> 37.5
                </ProductSize>
              </DescContainer>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </CartItems>
            <Hr />
            <CartItems>
              <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
              <DescContainer>
                <ProductName>
                  <b>Product:</b> HAKURA T-SHIRT
                </ProductName>
                <ProductId>
                  <b>ID:</b> 93813718293
                </ProductId>
                <Color color="gray"></Color>
                <ProductSize>
                  <b>Size:</b> M
                </ProductSize>
              </DescContainer>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </PriceDetail>
            </CartItems>
          </Items>
          <OrderSummary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <CheckoutButton action large>
              CHECKOUT NOW
            </CheckoutButton>
          </OrderSummary>
        </CartDashboard>
      </CartContainer>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Cart;
