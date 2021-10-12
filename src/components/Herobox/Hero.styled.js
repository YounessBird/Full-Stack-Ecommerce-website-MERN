import styled from "styled-components";
import { mobile } from "../../components/style/Responsive";

export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({ direction }) => direction == "left" && "10px"};
  right: ${({ direction }) => direction == "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 3;
`;
export const SliderContainer = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${({ slideIndex }) => slideIndex * -100}vw);
`;

export const Slider = styled.div`
  display: flex;
  align-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #${({ bg }) => bg};
`;
export const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
`;
export const Image = styled.img`
  display: block;
  height: ${({ height }) => (height ? height : "100%")};
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 140px;
`;
export const Title = styled.h1`
  font-size: 70px;
`;
export const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  letter-spacing: 3px;
`;
export const Button = styled.h1``;
