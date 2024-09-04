import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f8f9fa;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #333;
  }

  a {
    text-decoration: none;
    color: #007bff;
  }

  a:hover {
    color: #0056b3;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
`;

export default GlobalStyles;
