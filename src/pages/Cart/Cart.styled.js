import styled from "styled-components";
import { mobile } from "../../components/style/Responsive";
import { Button } from "../../components/shared";

export const Container = styled.div``;

export const CartContainer = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
export const CartTitle = styled.h1`
  font-weight: 300;
  text-align: center;
`;
export const CartOptions = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px;
`;
export const ContinueButton = styled(Button)`
  background-color: coral;
  padding: 10px;
`;
export const ShoppingFavs = styled.div`
  ${mobile({ display: "none" })}
`;
export const TopText = styled.span`
  margin-left: 10px;
  text-decoration: underline;
  cursor: pointer;
`;

export const CheckoutButton = styled(Button)``;
export const CartDashboard = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Items = styled.div`
  flex: 3;
`;
export const CartItems = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Image = styled.img`
  width: 200px;
`;
export const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  flex: 2;
  ${mobile({ flexDirection: "column" })}
`;
export const ProductName = styled.span``;
export const ProductId = styled.span``;
export const Color = styled.div`
  background-color: ${({ color }) => color};
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
export const ProductSize = styled.span``;

export const PriceDetail = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 40px;
`;
export const RemoveItem = styled.div`
  font-weight: bolder;
  margin-left: 140px;
  cursor: pointer;
`;
export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
export const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;
export const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;
export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

export const OrderSummary = styled.div`
  flex: 1;
  border: 0.5px solid lightgrey;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  /* display: flex;
    flex-direction: column;
    justify-content: space-between; */
`;
export const SummaryTitle = styled.h1`
  font-weight: 200;
  text-align: center;
`;
export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0px;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

export const SummaryItemText = styled.span``;
export const SummaryItemPrice = styled.span``;
