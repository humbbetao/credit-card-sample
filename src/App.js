import React from 'react'
import { ThemeProvider } from 'styled-components'
import Home from 'pages/Home'
import breakpoints from 'config/breakpoints'
import constants from 'config/constants'
import colors from 'components/Colors'
import GlobalStyle from 'components/GlobalStyle'

const theme = { breakpoints, colors, sizes: constants }

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  )
}

export default App
