import { createGlobalStyle } from 'styled-components'

import breakpoints from 'config/breakpoints'
import sizes from 'config/sizes'
import colors from 'components/Colors'

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Verdana;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
 
`
const theme = { breakpoints, colors, sizes }
export { theme }
export default Global
