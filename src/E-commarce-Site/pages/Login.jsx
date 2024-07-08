import React from "react";
import styled from "styled-components";
import { Mobile } from "../Responsive";

const Container = styled.div`
  height: 100vh;
  background: linear-gradient(
      rgba(000, 000, 000, 0.5),
      rgba(000, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
`;
const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 25%;
  background-color: white;
  gap: 10px;
  ${Mobile({ width: "75%" })}
`;
const Form = styled.form`
  display: flex;

  flex-direction: column;
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
const Link = styled.a`
  text-decoration: none;
  font-size: 12px;
  cursor: pointer;
`;

export default function Login() {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>Sign In</Title>
          <Form>
            <Input type="text" placeholder="Username" />
            <Input type="text" placeholder="Password" />
            <Button>Log In</Button>
            <Link>Do Not remember your Password</Link>
            <Link>Create a New Account</Link>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
}
