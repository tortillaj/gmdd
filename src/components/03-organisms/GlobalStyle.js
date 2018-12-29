import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import { shevy, media, themeValue } from '../theme'

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    /* 1rem = 14px @ base browser settings */
    font-size: 87.5%;
    width: 100%;
    height: 100%;
    ${media.medium`
      /* 1rem = 10px @ base browser settings */
      font-size: 62.5%;
    `}
  }
  body {
    font-family: ${themeValue('typography.sans')};
    font-size: ${shevy.body.fontSize};
    line-height: ${shevy.body.lineHeight};
    background-color: ${themeValue('colors.background')};
    color: ${themeValue('colors.foreground')};
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      box-sizing: border-box;
    }
  }
`