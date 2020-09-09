import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    #root {
      --color-main: #D20E50;
      --color-background: #F3F3F3;
      --color-blue-light: #B3DDDD;
      --color-blue-font: #3D8D8D;
      --color-black-font: #333;
      --color-place-holder: #5D5D5D;
  font-size: 60%; /* controle das medidas rem */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}

html,
body {
  height: 100vh;
  width: 100vw;
}

body {
  background: var(--color-background);
  padding: 20px;
}

a {
  text-decoration: none;
}

body,
input,
button,
textarea {
  -webkit-font-smoothing: antialiased;
  font-family: 'Ubuntu', sans-serif;
  color: #333;
  font-weight: 400;
}

select {
  outline: none;
}

@media (min-width: 700px) {
  #root {
    font-size: 62.5%;
  }
}
`;
