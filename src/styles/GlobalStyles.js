import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html, #root {
    height: 100vh;
    width: 100vw;
  }
  body::-webkit-scrollbar {
    width: 12px;
  }
  body::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.body};
  }
  body::-webkit-scrollbar-thumb {
    background-color: transparent;
    border: 3px solid ${({ theme }) => theme.body};
    border-radius: 10px;
  }

  body {
    background-color: ${({ theme }) => theme.body};
    font-family: 'Spartan', sans-serif; 
    transition: background-color 0.1s linear;
    margin: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: ${({ theme }) => theme.link};
    text-decoration: none;
    transform: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px 0;
    font-weight: 600;
    color: ${({ theme }) => theme.sectionHeading};
    line-height: 1.1;
  }
  `;

export default GlobalStyles;
