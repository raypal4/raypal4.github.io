import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Poppins', sans-serif;
    transition: all 0.5s ease;
  }

  .side-bar{
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text}
  }
  
  .side-bar #menuBtn{
    color: ${({ theme }) => theme.text};
  }

  .side-bar .logo-content .logo {
    color: ${({ theme }) => theme.text};
  }

  .side-bar ul li a:hover {
    color: ${({ theme }) => theme.background} !important;
    background: ${({ theme }) => theme.text} !important;
  }

  .side-bar ul li a {
    color: ${({ theme }) => theme.text};
  }

  .grid-title{
    color: ${({ theme }) => theme.gridtext};
  }
  
  .grid-1 {
    background: ${({ theme }) => theme.grid1};
  }
  
  .grid-2 {
    background: ${({ theme }) => theme.grid2};
  }
  
  .grid-3 {
    background: ${({ theme }) => theme.grid3};
  }

  .card{
    background: ${({ theme }) => theme.background};
  }

  .card-title{
    color: ${({ theme }) => theme.text};
  }

  #instafeed .card-content p {
    color: ${({ theme }) => theme.text};
  }
  
  `;