import { createGlobalStyle, css } from 'styled-components'
import Raleway from '../assets/fonts/Raleway/static/Raleway-Medium.ttf'

const GlobalStyle = createGlobalStyle`
  ${css`
    @font-face {
      font-family: 'Raleway';
      src: url(${Raleway});
    }
  `}
  body {
    font-family: Raleway;
  }
`
export default GlobalStyle
