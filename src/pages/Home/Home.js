import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import Header from 'components/Header'
import Article from 'components/Article'
import Footer from 'components/Footer'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
const Container = styled.div`
  width: 100%;
  height: 100%;
`

function Home() {
  const themeContext = useContext(ThemeContext)
  const isDesktop = useMediaQuery({
    minWidth: themeContext.breakpoints.md,
  })

  return (
    <Container>
      {isDesktop && <Header />}
      <Article />
      {isDesktop && <Footer />}
    </Container>
  )
}
export default Home
