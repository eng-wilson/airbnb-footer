import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: 'Circular-Medium';
    src: url('/fonts/CircularStd-Medium.otf');
    font-display: swap;
  }

  @font-face {
    font-family: 'Circular-Light';
    src: url('/fonts/CircularStd-Light.otf');
    font-display: swap;
  }
`;
