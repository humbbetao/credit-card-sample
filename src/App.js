import React from 'react'
import { ThemeProvider } from 'styled-components'
import Home from 'pages/Home'

import GlobalStyle, { theme as themeStyled } from 'components/GlobalStyle'
import {
  ThemeProvider as ThemeProviderUI,
  createMuiTheme,
} from '@material-ui/core/styles'

const themeMaterialUi = createMuiTheme({
  palette: {
    primary: { main: themeStyled.colors.gray },
    error: {
      light: themeStyled.colors.gray,
      main: themeStyled.colors.red,
      dark: themeStyled.colors.gray,
      contrastText: themeStyled.colors.gray,
    },
    secondary: { main: themeStyled.colors.black },
    text: {
      primary: themeStyled.colors.black,
      secondary: themeStyled.colors.gray,
    },
    color: { main: themeStyled.colors.black },
  },
})

function App() {
  return (
    <ThemeProvider theme={themeStyled}>
      <ThemeProviderUI theme={themeMaterialUi}>
        <GlobalStyle />
        <Home />
      </ThemeProviderUI>
    </ThemeProvider>
  )
}

export default App
