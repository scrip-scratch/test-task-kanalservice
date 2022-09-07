import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
  }

  main {
    min-height: 75vh;
    width: 100%;
    display: flex;
  }

`
