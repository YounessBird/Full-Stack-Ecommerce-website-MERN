import React, { useState, useEffect } from "react";
import { Add, Remove } from "@mui/icons-material";
import { Announcement, Footer, Header, Newsletter } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import {
  Container,
  CartContainer,
  CartTitle,
  CartOptions,
  ContinueButton,
  ShoppingFavs,
  TopText,
  CheckoutButton,
  CartDashboard,
  Items,
  CartItems,
  Image,
  DescContainer,
  ProductName,
  Color,
  ProductSize,
  PriceDetail,
  RemoveItem,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  ProductId,
  Hr,
  OrderSummary,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
} from "./Cart.styled";
import {
  addProduct,
  editQuantity,
  removeItem,
} from "../../components/redux/cartSlice";

const stripKey = process.env.REACT_APP_STRIPE;

const Cart = () => {
  //HANDELING STATE WITH REDUX
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart);
  const handleAmountChange = (type, prodCartID) => () => {
    dispatch(editQuantity({ prodCartID, type }));
  };
  const handleRemoveItem = (prodCartID, price, amount) => () => {
    dispatch(removeItem({ prodCartID, price, amount }));
  };

  // ROUTES
  const history = useHistory();

  //Stripe handling
  const [stripetoken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios
          .post("http://localhost:5000/api/checkout/payment", {
            tokenId: stripetoken.id,
            amount: data.total * 100,
          })
          .then((response) => {
            // Do something with the response
            history.push("/success", { data: response.data });
          });
      } catch (err) {
        console.log(err);
      }
    };
    stripetoken && makeRequest();
  }, [stripetoken, data.total]);
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
            {data.product.map((info) => (
              <CartItems>
                <Image src={info.img} />
                <DescContainer>
                  <ProductName>
                    <b>Product:</b> {info.title}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> {info._id}
                  </ProductId>
                  <Color color={info.color}></Color>
                  <ProductSize>
                    <b>Size:</b> {info.size}
                  </ProductSize>
                </DescContainer>
                <PriceDetail>
                  <RemoveItem
                    onClick={handleRemoveItem(
                      info.prodCartID,
                      info.price,
                      info.amount
                    )}
                  >
                    X
                  </RemoveItem>
                  <ProductAmountContainer>
                    <Add
                      style={{ cursor: "pointer" }}
                      onClick={handleAmountChange("inc", info.prodCartID)}
                    />
                    <ProductAmount>{info.amount}</ProductAmount>
                    <Remove
                      style={{ cursor: "pointer" }}
                      onClick={handleAmountChange("dec", info.prodCartID)}
                    />
                  </ProductAmountContainer>
                  <ProductPrice>$ {info.price}</ProductPrice>
                </PriceDetail>
              </CartItems>
            ))}
            <Hr />
          </Items>
          <OrderSummary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {data.total}</SummaryItemPrice>
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
              <SummaryItemPrice>$ {data.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              token={onToken}
              stripeKey={stripKey}
              name="Logo Co." // the pop-in header title
              description="Big Data Stuff" // the pop-in header subtitle
              image="https://stripe.com/img/documentation/checkout/marketplace.png"
              amount={data.total * 100} // convert to cents
              currency="USD"
              shippingAddress
              billingAddress={true}
              // cause zipCheck to be pulled from billing address (set to shipping if none provided).
              zipCode={true}
            >
              <CheckoutButton action large>
                CHECKOUT NOW
              </CheckoutButton>
            </StripeCheckout>
          </OrderSummary>
        </CartDashboard>
      </CartContainer>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Cart;
