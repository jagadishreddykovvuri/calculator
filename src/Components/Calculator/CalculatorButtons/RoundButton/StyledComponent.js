import styled, { css } from "styled-components";
export const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: none;
  cursor:pointer;
  outline: none;
  margin: 2px;
  font-size:14px;
  font-weight: bold;
  color: white;
  background-color:#171717;
  ${props =>
    props.styler === "0" &&
    css`
      width: 100px;
    `}
  ${props =>
    props.styler === "/" &&
    css`
      background-color: #e48800;
    `}
    ${props =>
      props.styler === "*" &&
      css`
        background-color: #e48800;
      `}
    ${props =>
      props.styler === "-" &&
      css`
        background-color: #e48800;
      `}
    ${props =>
      props.styler === "+" &&
      css`
        background-color: #e48800;
      `}
    ${props =>
      props.styler === "=" &&
      css`
        background-color: #e48800;
      `}
      ${props =>
        props.styler === "C" &&
        css`
          background-color: #9e9e9e;
        `}
      ${props =>
        props.styler === "%" &&
        css`
          background-color: #9e9e9e;
        `}
      ${props =>
        props.styler === "Del" &&
        css`
          background-color: #9e9e9e;
        `}
`;
