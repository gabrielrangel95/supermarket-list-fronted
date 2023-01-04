import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: 'Avenir Next';
  src: url('/public/fonts/AvenirNext-Regular.otf');
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url('/public/fonts/AvenirNext-Bold.otf');
    font-weight: bold;
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url('/public/fonts/AvenirNext-It.otf');
    font-style: italic;
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url('/public/fonts/AvenirNext-Medium.ttf');
    font-weight: 500;
  }

  body {
    margin: 0;
    font-family: 'Avenir Next';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }


  ::-webkit-scrollbar {
    visibility: hidden;
    width: 0px;
  }
`
