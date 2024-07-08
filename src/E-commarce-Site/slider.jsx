import React, { useState } from "react";
import styled from "styled-components";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import { sliderItems } from "./data";
import { Mobile } from "./Responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  position: relative;
  overflow: hidden;
  ${Mobile({ display: "none" })}
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: lightgray;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 2s ease;
  background-color: #;
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  //   background-color:#${(props) => props.bg}

  align-items: center;
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Decs = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-space: 3px;
`;
const Button = styled.button`
  padding: 5px 20px;
  font-size: 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  border: 0px;
`;

export default function Slider() {
  const [slideIndex, setslideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setslideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setslideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <>
      <div>
        <Container>
          <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlinedIcon />
          </Arrow>
          <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => (
              <Slide>
                <ImgContainer>
                  <Image src={item.img} />
                </ImgContainer>
                <InfoContainer>
                  <Title>{item.title}</Title>
                  <Decs>{item.decs}</Decs>
                  <Button>Shop Now</Button>
                </InfoContainer>
              </Slide>
            ))}
            <Slide>
              <ImgContainer>
                <Image src="https://img.freepik.com/free-photo/woman-skinny-jeans-heels_144627-4696.jpg?t=st=1710226554~exp=1710230154~hmac=fb1248d2f8c9b2fcb10a1e010f1f80e90f4ca16aebe9ab290c0d6eb6299e6e23&w=360" />
              </ImgContainer>
              <InfoContainer>
                <Title>Summer Sale</Title>
                <Decs>
                  Don't compromise on style! Get flat 30% off for new Arrivals.
                </Decs>
                <Button>Shop Now</Button>
              </InfoContainer>
            </Slide>
          </Wrapper>

          <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlinedIcon />
          </Arrow>
        </Container>
      </div>
    </>
  );
}
