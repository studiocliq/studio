import { createGlobalStyle } from "styled-components";
import { reset } from 'styled-reset';

const GlobalStyle= createGlobalStyle`
  ${reset}

  div {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
    outline: none;

    &:hover, &:active {
      text-decoration: none;
    }
  }
`;

export default GlobalStyle;
