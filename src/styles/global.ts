import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,*::after,*::before{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary[400]};
  }

  body,html,#__next{
    width: 100%;
    height: 100%;

    font-size: 1rem;
    background:${({ theme }) => theme.colors.gray[50]};
    line-height: 150%;


  }
  
  body,html,input,textarea,button {
    font-family: ${({ theme }) => theme.fonts.inter};
    color:${({ theme }) => theme.colors.gray[900]};
    -webkit-font-smoothing: antialiased;
  }

  button{
    cursor: pointer;
  }

  button,input{
    border: 0;
    outline: 0;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  img,picture {
    max-width: 100%;
    display: block;
  }

  ul,ol{
    list-style: none;
  }
`
