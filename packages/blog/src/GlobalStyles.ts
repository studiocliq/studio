import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${ reset }
  a {
    text-decoration: none;
  }
  html {
    font-family: "Noto Sans KR", sans-serif;
  }
`;

export default GlobalStyle;
