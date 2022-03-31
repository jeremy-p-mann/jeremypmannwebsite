import { createGlobalStyle } from "styled-components";

import Optima from "./fonts/unicode.optima.woff";

const FontStyles = createGlobalStyle`
@font-face {
  font-family: "optima";
  src: url(${Optima});
}
`;

export default FontStyles;
