import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Mobile } from "./Responsive";
import { Link } from "react-router-dom";

// This is our NavBar
const Container = styled.div`
  hegiht: 60px;
  ${Mobile({
    margin: "10px 0px",
    height: "50px",
    padding: "0px 10px",
  })}
`;
// This is our naveBar Left

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${Mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 25px;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${Mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${Mobile({ width: "50px" })}
`;
// This is our NavBar center
const Center = styled.div`
  flex: 1;
`;
const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  ${Mobile({ fontSize: "24px" })}
`;

// This is our navBar right
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 25px;
  ${Mobile({ justifyContent: "center" })}
`;
const Menuitem = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${Mobile({ fontSize: "12px", marginleft: "10px" })}
`;

export default function navebar() {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Language>En</Language>
            <SearchContainer>
              <Input placeholder="search" />
              <SearchIcon
                style={{ color: "gray", fontSize: "24px" }}
              />
            </SearchContainer>
          </Left>
          <Center>
            <Logo>Lama.</Logo>
          </Center>
          <Right>
            <Link to="/Register">
              <Menuitem
                style={{ color: "black", textDecoration: "none" }}
              >
                REGISTER
              </Menuitem>
            </Link>
            <Link to="/SingIn">
              <Menuitem
                style={{ color: "black", textDecoration: "none" }}
              >
                SIGN IN
              </Menuitem>
            </Link>
            <Menuitem>
              <Link to="/Cart">
                <Badge badgeContent={4} color="primary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </Link>
            </Menuitem>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
}
