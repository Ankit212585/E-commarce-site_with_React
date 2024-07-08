import React from "react";
import SendIcon from "@mui/icons-material/Send";
import styled from "styled-components";
import { Mobile } from "./Responsive";

const Container = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fcf5f5;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;
const Title = styled.h1`
  font-size: 70px;
  ${Mobile({ fontSize: "52px", textAlign: "center" })}
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  ${Mobile({ textAlign: "center" })}
`;
const Input = styled.input`
  flex: 8;
  border: none;
  padding-left: 20px;
  outline: none;

  &::placeholder {
    color: lightgray;
  }
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;
const InputContainer = styled.div`
  height: 40px;
  width: 50%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${Mobile({ width: "80%" })}
`;

export default function Newsletter() {
  return (
    <>
      <Container>
        <Title>News Letter</Title>
        <Description>
          Get timely updates from your favorite Products
        </Description>
        <InputContainer>
          <Input placeholder="Your Email" />
          <Button>
            <SendIcon />
          </Button>
        </InputContainer>
      </Container>
    </>
  );
}
