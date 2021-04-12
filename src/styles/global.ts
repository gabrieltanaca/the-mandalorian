import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  body,
  button{
    font: 20px "Bebas Neue", sans-serif;
  }

  button {
    border: 0;
    cursor: pointer;
  }
  

`;
