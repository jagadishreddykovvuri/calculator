import styled, { css } from "styled-components";
export const P = styled.p`
  font-size: 20px;
  margin: 10px;
  ${props =>
    props.result &&
    css`
      font-size: 40px;
    `}
`;
