import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }

  .side-bar{
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text}
  }
  
  .side-bar #menuBtn{
    color: ${({ theme }) => theme.text}
  }

  .side-bar .logo-content .logo {
    color: ${({ theme }) => theme.text}
  }

  .side-bar ul li a {
    color: ${({ theme }) => theme.text}
  }
  `;
