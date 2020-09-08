import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    #root {
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
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
}

body,
input,
button,
textarea {
  font-family: 'Ubuntu', sans-serif;
  color: #333;
}
@media (min-width: 700px) {
  #root {
    font-size: 62.5%;
  }
}
`;
