import React from "react";
import A1 from "../navebar";
import Announcement from "../Announcement";
import Footer from "../Footer";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  text-align: center;
  font-weight: 300;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-item: center;
  padding: 20px;
`;
const TopTexts = styled.div`
  display: flex;
  gap: 20px;
`;
const TopText = styled.span`
  cursor: pointer;
  text-decoration: underline;
`;
const Topbutton = styled.button`
  padding: 10px;
  font-weight: 600;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const Bottom = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
`;
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  gap: 40px;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ProductName = styled.span``;
const Productid = styled.span``;
const Productcolor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetails = styled.span`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  font-weight: 200;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;
const Hr = styled.hr`
  background-color: #eee;
  border: 0.1px solid lightgray;
  height: 2px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 53vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  background-color: black;
  color: white;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: white;
    color: black;
  }
`;

export default function Cart() {
  return (
    <>
      <Container>
        <A1 />
        <Announcement />

        <Wrapper>
          <Title>Your Bag</Title>
          <Top>
            <Topbutton>Continue shopping</Topbutton>
            <TopTexts>
              <TopText>Shopping Bag(2)</TopText>
              <TopText>Your wishlist(0)</TopText>
            </TopTexts>
            <Topbutton type="filled">Checkout Now</Topbutton>
          </Top>
          <Bottom>
            <Info>
              <Product>
                <ProductDetails>
                  <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />

                  <Details>
                    <ProductName>
                      <b>Product:</b> Jessie Thunder shoes
                    </ProductName>
                    <Productid>
                      <b>ID:</b> 781162
                    </Productid>
                    <Productcolor color="black" />
                    <ProductSize>
                      <b>size:</b> 37.5
                    </ProductSize>
                  </Details>
                </ProductDetails>
                <PriceDetails>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>2</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$45</ProductPrice>
                </PriceDetails>
              </Product>
              <Hr />
              <Product>
                <ProductDetails>
                  <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />

                  <Details>
                    <ProductName>
                      <b>Product:</b> HAKURA T-SHIRT
                    </ProductName>
                    <Productid>
                      <b>ID:</b> 93813718293
                    </Productid>
                    <Productcolor color="gray" />
                    <ProductSize>
                      <b>Size:</b> M
                    </ProductSize>
                  </Details>
                </ProductDetails>
                <PriceDetails>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>2</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$45</ProductPrice>
                </PriceDetails>
              </Product>
            </Info>
            <Summary>
              <SummaryTitle>Order Summary</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>$6.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ -6.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>$90</SummaryItemPrice>
              </SummaryItem>
              <Button>Checkout Now</Button>
            </Summary>
          </Bottom>
        </Wrapper>
        <Footer />
      </Container>
    </>
  );
}
