import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    color: ${theme.colors.font};
     background-color: ${theme.colors.primaryBg};
  }

a {
    text-decoration: unset;
    cursor: pointer;
}

ul {
  list-style: none;
}

button {
    background-color: unset;
    cursor: pointer;
    color: ${theme.colors.font};
}
`;
