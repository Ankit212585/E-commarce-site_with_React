import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PrintIcon from "@mui/icons-material/Print";
import XIcon from "@mui/icons-material/X";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { Mobile } from "./Responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  ${Mobile({ flexDirection: "column" })}
`;
// This is our left Section
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p``;
const SocialContainer = styled.div`
  display: flex;
  gap: 20px;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #${(props) => props.color};
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
// This is our Center Section
const Center = styled.div`
  flex: 1;
  padding: 20px;
  gap: 20px;
  ${Mobile({ display: "none" })}
`;

const Title = styled.h3``;

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  //   flex-direction: column;
  cursor: pointer;

  list-style-type: none;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 20px;
  //   font-weight: 300;
`;
// This is our Right Section
const Right = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  ${Mobile({ backgroundColor: "#eee" })}
`;
const ContactItem = styled.div`
  display: flex;
  gap: 10px;
`;
const Payment = styled.img``;

export default function Footer() {
  return (
    <>
      <Container>
        {/* Left */}
        <Left>
          <Logo>Lama.</Logo>
          <Desc>
            There are many variations of passages of lorem Ipsum
            available, but the majority have suffered alteration in
            some form, by injected humour, and randomised words which
            dont't look even slightly believable.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <FacebookIcon />
            </SocialIcon>
            <SocialIcon color="E4405f">
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <PrintIcon />
            </SocialIcon>
            <SocialIcon color="E60023">
              <XIcon />
            </SocialIcon>
          </SocialContainer>
        </Left>

        {/* Center */}
        <Center>
          <Title>Useful links</Title>
          <List>
            <ListItem>Home</ListItem>
            <Link to="/Product">
              <ListItem>Cart</ListItem>
            </Link>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        {/* Right */}
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <FmdGoodIcon /> 622 Dixie Path, South tobinchester 98336
          </ContactItem>
          <ContactItem>
            <LocalPhoneIcon /> +444 912 564
          </ContactItem>
          <ContactItem>
            <EmailIcon /> Contact@abc.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    </>
  );
}
