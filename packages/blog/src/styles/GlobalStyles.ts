import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  a {
    color: inherit;
    text-decoration: none;
    outline: none;

    &:hover, &:active {
      text-decoration: none;
    }
  }

  html {
    font-family: "Noto Sans KR", sans-serif;
  }
`;

export default GlobalStyle;
