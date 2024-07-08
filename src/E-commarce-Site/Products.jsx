import React from "react";
import { popularProducts } from "./data";
import Product from "./Product";
import styled from "styled-components";

const Container = styled.div`
    padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export default function Products() {
  return (
    <>
      <Container>
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
}
