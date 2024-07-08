import React from "react";
import styled from "styled-components";
import A1 from "../navebar";
import Announcement from "../Announcement";
import Products from "../Products";
import Newsletter from "../Newsletter";
import Footer from "../Footer";
import { Mobile } from "../Responsive";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
  ${Mobile({ margin: "10px" })}
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  ${Mobile({ margin: "10px" })}
`;
const Filter = styled.div`
  display: flex;
  gap: 20px;

  ${Mobile({ display: "flex", flexDirection: "column" })};
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const Select = styled.select`
  padding: 5px;
  outline: none;
  width: 100px;
  border: 1px solid lightgray;
`;
const Opetion = styled.option``;

export default function Productlist() {
  return (
    <>
      <Container>
        <Announcement />
        <A1 />
        <Title>Dresses</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select>
              <Opetion disabled selected>
                colors
              </Opetion>
              <Opetion>white</Opetion>
              <Opetion>Black</Opetion>
              <Opetion>Red</Opetion>
              <Opetion>Blue</Opetion>
              <Opetion>Yellow</Opetion>
              <Opetion>Green</Opetion>
            </Select>
            <Select>
              <Opetion disabled selected>
                sizes
              </Opetion>
              <Opetion>XS</Opetion>
              <Opetion>S</Opetion>
              <Opetion>M</Opetion>
              <Opetion>L</Opetion>
              <Opetion>XL</Opetion>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Shot Products:</FilterText>
            <Select>
              <Opetion disabled selected>
                Newest
              </Opetion>
              <Opetion>Price (asc)</Opetion>
              <Opetion>Price (desc)</Opetion>
            </Select>
          </Filter>
        </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
      </Container>
    </>
  );
}
