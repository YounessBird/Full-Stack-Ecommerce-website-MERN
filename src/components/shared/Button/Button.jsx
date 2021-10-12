import React from "react";
import { StyledButton, StyledLinkBtn, StyledScrollBtn } from "./Button.styled";
const Button = ({ children, type, ...props }) => {
  return props.to ? (
    type == "scroll" ? (
      <StyledScrollBtn {...props}>{children}</StyledScrollBtn>
    ) : (
      <StyledLinkBtn {...props}>{children}</StyledLinkBtn>
    )
  ) : (
    <StyledButton {...props}>{children}</StyledButton>
  );
};

export default Button;
