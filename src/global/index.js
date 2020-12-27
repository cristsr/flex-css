import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (!reverse ? "row" : "row-reverse")};
`;
Row.defaultProps = {
  reverse: false
};

export const Column = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (!reverse ? "column" : "column-reverse")};
`;
Column.defaultProps = {
  reverse: false
};
