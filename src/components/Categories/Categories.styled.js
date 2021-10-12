import styled from "styled-components";
import { mobile } from "../../components/style/Responsive";

export const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;
