import React from "react";
import { categories } from "./data";
import CategoriesItem from "./CategoriesItem";
import styled from "styled-components";
import { Mobile } from "./Responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${Mobile({ padding: "0px", flexDirection: "column" })}
`;

export default function Categories() {
  return (
    <>
      <Container>
        {categories.map((item) => (
          <CategoriesItem item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
}
