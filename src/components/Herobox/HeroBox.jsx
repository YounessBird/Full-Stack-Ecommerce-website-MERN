import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import {
  HeroContainer,
  Arrow,
  SliderContainer,
  Slider,
  ImgContainer,
  InfoContainer,
  Image,
  Title,
  Desc,
} from "./Hero.styled";
import { Button } from "../shared";
const HeroBox = ({ sliderData }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    direction == "left"
      ? setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderData.length - 1)
      : setSlideIndex(slideIndex < sliderData.length - 1 ? slideIndex + 1 : 0);
    console.log(slideIndex);
  };

  return (
    <HeroContainer>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <SliderContainer slideIndex={slideIndex}>
        {sliderData.map((item) => (
          <Slider bg={item.bg} key={item.id}>
            <ImgContainer top={item.top} left={item.left}>
              <Image src={item.img} height={item.height} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slider>
        ))}
      </SliderContainer>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </HeroContainer>
  );
};

export default HeroBox;
