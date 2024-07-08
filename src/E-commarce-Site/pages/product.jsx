import React from "react";
import styled from "styled-components";
import A1 from "../navebar";
import Announcement from "../Announcement";
import Newsletter from "../Newsletter";
import Footer from "../Footer";
import { Add, Remove } from "@mui/icons-material";
import { Mobile } from "../Responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  ${Mobile({ display: "flex", flexDirection: "column", padding: "10px" })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img``;
const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
const Title = styled.h1``;
const Desc = styled.p``;
const Price = styled.span`
  font-weight: 100;
  font-size: 32px;
`;
const FilterContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  ${Mobile({ width: "100%" })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const FilterText = styled.span`
  font-size: 24px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;
const FilterSize = styled.select`
  width: 100px;
  padding: 2px 10px;
  cursor: pointer;
  outline: none;
  border: 1px solid lightgray;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  margin-top: 20px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${Mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border: 1px solid teal;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  padding: 5px 20px;
  transition: all 0.5s ease-in-out;
  border: none;
  &:hover {
    background-color: teal;
    color: white;
  }
`;

export default function Product() {
  return (
    <>
      <Container>
        <Announcement />
        <A1 />
        <Wrapper>
          <ImgContainer>
            <Image src="https://img.freepik.com/premium-photo/girl-black-outfit-young-lady-touches-hair-gold-bracelets-leather-bag-charming-model-expensive-clothes_274234-7281.jpg?w=360" />
          </ImgContainer>
          <InfoContainer>
            <Title>Dinim Jumpsuit</Title>
            <Desc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              impedit, voluptatem, consequuntur alias animi officiis aspernatur
              explicabo tempore, accusantium ut cupiditate ipsum. Laborum
              blanditiis voluptatem consectetur nihil veniam iure itaque.
            </Desc>
            <Price> $20</Price>
            <FilterContainer>
              <Filter>
                <FilterText>Color</FilterText>
                <FilterColor color="black" />
                <FilterColor color="darkBlue" />
                <FilterColor color="gray" />
              </Filter>
              <Filter>
                <FilterText>Size</FilterText>
                <FilterSize>
                  <FilterSizeOption disabled selected>
                    size
                  </FilterSizeOption>
                  <FilterSizeOption>XS</FilterSizeOption>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove />
                <Amount>1</Amount>
                <Add />
              </AmountContainer>
              <Button>Add to cart</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
      </Container>
    </>
  );
}
