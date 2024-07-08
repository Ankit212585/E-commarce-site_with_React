import React from "react";
import styled from "styled-components";
import { Mobile } from "../Responsive";

const Container = styled.div`
  height: 100vh;
  background: linear-gradient(
      rgba(000, 000, 000, 0.5),
      rgba(000, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-size: cover;
`;
const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 40%;
  background-color: white;
  ${Mobile({ width: "90%" })}
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
const Input = styled.input`
  flex: 1;
  padding: 5px 10px;
  border: 1px solid lightgray;
  outline: none;
`;
const Title = styled.h1`
  text-align: center;
  font-weight: 300;
`;
const Agreement = styled.span`
  font-size: 12px;
`;
const Button = styled.button`
  border: none;
  padding: 5px 30px;
  cursor: pointer;
  background-color: teal;
  color: white;
  transition: all 0.5s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export default function Register() {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>Create an Account</Title>
          <Form>
            <Input type="text" placeholder="Your Name" />
            <Input type="text" placeholder="Last name" />
            <Input type="text" placeholder="Username" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="password" />
            <Input type="password" placeholder="Confirm Password" />
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>Privacy policy</b>
            </Agreement>
            <Button>Submit</Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
}
