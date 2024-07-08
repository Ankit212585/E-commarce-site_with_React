import React from "react";
import styled from "styled-components";
import { Mobile } from "./Responsive";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  ${Mobile({ fontSize: "12px" })}
`;

export default function Announcement() {
  return (
    <>
      <div>
        <Container>Super Deal Free Shipping an Orders Over $50</Container>
      </div>
    </>
  );
}
