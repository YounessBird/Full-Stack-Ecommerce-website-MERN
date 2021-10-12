import styled from "styled-components";
import { Container } from "../shared";
import { Link as LinkS } from "react-scroll";
import { mobile } from "../../components/style/Responsive";

export const NavBar = styled.nav`
  //background-color: pink;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;
export const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  ${mobile({ height: "50px", padding: "10px 0px" })}
`;

export const NavOptions = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;
export const Language = styled.select`
  font-size: 14px;
  cursor: pointer;
  border: none;
  outline: none;
  padding-right: 3px;
  ${mobile({ display: "none" })}
`;
export const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
export const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;
export const LogoContainer = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({ fontSize: "24px" })}
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  outline: none;
  border: none;
  list-style-type: none;
  flex: 1;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
export const NavItem = styled.li`
  font-size: 14px;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
export const NavLinks = styled(LinkS)``;
