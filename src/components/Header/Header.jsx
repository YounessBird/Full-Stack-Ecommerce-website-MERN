import React from "react";
import { Link as LinkR } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  NavBar,
  NavContainer,
  NavOptions,
  Language,
  SearchContainer,
  LogoContainer,
  Input,
  NavMenu,
  NavItem,
  NavLinks,
} from "./Header.styled";
import { Logo } from "../shared";
const Header = () => {
  return (
    <NavBar>
      <NavContainer>
        <NavOptions>
          <Language>
            <option>Eng</option>
            <option>Ger</option>
          </Language>
          <SearchContainer>
            <Input />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </NavOptions>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <NavMenu>
          <NavItem>
            <NavLinks>Register</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks>Sign In</NavLinks>
          </NavItem>
          <NavItem>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </NavBar>
  );
};

export default Header;
