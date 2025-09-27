import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { colors } from '@/styles/theme';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SancheonUju';
    src: url('/fonts/SancheonUjuOTF-Regular 2.otf') format('opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'SancheonUju', sans-serif;
    background-color: ${colors.background};
    color: ${colors.text};
  }

`;

const GlobalStyles = () => {
  return <GlobalStyle />;
};

export default GlobalStyles;