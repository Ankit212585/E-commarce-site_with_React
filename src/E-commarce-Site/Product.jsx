import React from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Image = styled.img`
  mix-blend-mode: darken;
  width: 100%;
  height: 95%;
  //   z-index: 2;
  object-fit: cover;
  transition: all 0.7s ease-in-out;
  padding: 20px;
`;
// const Circle = styled.div`
//   width: 200px;
//   height: 200px;
//   border-radius: 50%;
//   position: absolute;
//   background-color: white;
// `;
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.2);

  //   z-index: 3;
  align-items: center;
  justify-content: center;
  gap: 20px;

  transition: all 0.7s ease-in-out;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5fbfd;
  position: relative;
  transition: all 0.5s ease-in-out;

  &:hover ${Info} {
    opacity: 1;
  }
  &:hover ${Image} {
    overflow: hidden;
    transform: scale(1.1);
  }
`;

export default function Product({ item }) {
  return (
    <>
      <Container>
        {/* <Circle /> */}
        <Image src={item.img} />
        <Info>
          <Icon>
            <ShoppingCartOutlinedIcon />
          </Icon>
          <Icon>
            <SearchOutlinedIcon />
          </Icon>
          <Icon>
            <FavoriteBorderOutlinedIcon />
          </Icon>
        </Info>
      </Container>
    </>
  );
}
