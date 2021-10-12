import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import styled, { css } from "styled-components";

export const baseBtnStyles = css`
  background: ${({ primary, action }) =>
    primary ? "#01bf71" : action ? "green" : "#010606"};
  white-space: nowrap;
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  border-radius: 50px;
  border: none;
  outline: none;
  box-shadow: 0 0 1;
  cursor: pointer;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "17px")};
  font-weight: 700;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  transition: all 0.2s ease-in-out;
  width: ${({ large }) => large && "100%"};
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary, action }) => (primary ? "#fff" : "#01BF71")};
    color: #010606;
    transform: scale(0.98);
  }
`;

export const StyledButton = styled.button`
  ${baseBtnStyles}
`;
export const StyledLinkBtn = styled(LinkR)`
  ${baseBtnStyles}
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  outline: none;
  width: fit-content;
`;
export const StyledScrollBtn = styled(LinkS)`
  ${baseBtnStyles}
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  outline: none;
  width: fit-content;
`;
