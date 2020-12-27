import React from "react";
import styled from "styled-components";
import { Column, Row } from "../global";

const Container = styled(Column)`
  background: gray;
  margin: 0 10px;
`;

const Item = styled(Row)`
  width: 100%;
  margin: 20px 0;
  background: yellow;
`;

export const Layout = () => {
  return (
    <Container reverse>
      <Item>
        1<h1>Hola Como estas</h1>
        <h2>Hola como estas</h2>
      </Item>
      <Item>
        2<h1>Hola Como estas</h1>
        <h2>Hola como estas</h2>
      </Item>
      <Item>
        3<h1>Hola Como estas</h1>
        <h2>Hola como estas</h2>
      </Item>
      <Item>
        4<h1>Hola Como estas</h1>
        <h2>Hola como estas</h2>
      </Item>
    </Container>
  );
};
