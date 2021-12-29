import { createGlobalStyle } from "styled-components";
import variables from "./variables";

const GlobalStyles = createGlobalStyle`
${variables}
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
    color: #ccd6f6;
    font-size: var(--fz-xl);
    line-height: 1.3;

    @media (max-width: 480px) {
      font-size: var(--fz-lg);
    }
  }

  section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1000px;

    @media (max-width: 768px) {
      padding: 80px 0;
    }

    @media (max-width: 480px) {
      padding: 60px 0;
    }
  }

  a {
    color: ${({ theme }) => theme.link};
    text-decoration: none;
    position: relative;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.link};
    }
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

  .bigHeading {
    font-size: clamp(40px, 8vw, 80px);
  }
  .mediumHeading {
    font-size: clamp(40px, 8vw, 60px);
  }
  .fillHeight {
    padding: 0 150px;

    @media (max-width: 1080px) {
      padding: 0 100px;
    }
    @media (max-width: 768px) {
      padding: 0 50px;
    }
    @media (max-width: 480px) {
      padding: 0 25px;
    }
  }
  .socialIcon {
    fill: none;
    color: ${({ theme }) => theme.text};
    width: 20px;

    &:hover {
      color: ${({ theme }) => theme.link};
    }
  }
  .numbered-heading {
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0 40px;
    width: 100%;
    font-size: clamp(26px, 5vw, var(--fz-heading));
    white-space: nowrap;

    &:before {
      position: relative;
      /* bottom: 4px; */
      counter-increment: section;
      content: '0' counter(section) '.';
      margin-right: 10px;
      color: ${({ theme }) => theme.highlightText};
      font-family: var(--font-mono);
      font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
      font-weight: 400;

      @media (max-width: 480px) {
        margin-bottom: -3px;
        margin-right: 5px;
      }
    }

    &:after {
      content: '';
      display: block;
      position: relative;
      /* top: -5px; */
      width: 300px;
      height: 1px;
      margin-left: 20px;
      background-color: ${({ theme }) => theme.sectionHeading};

      @media (max-width: 1080px) {
        width: 200px;
      }
      @media (max-width: 768px) {
        width: 100%;
      }
      @media (max-width: 600px) {
        margin-left: 10px;
      }
    }
  }
`;

export default GlobalStyles;
