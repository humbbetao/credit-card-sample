import React from 'react'
import styled from 'styled-components'

import Header from 'components/Header'
import Article from 'components/Article'
import Footer from 'components/Footer'

const Container = styled.div`
  width: 100%;
  height: 100%;
`

function Home() {
  return (
    <Container>
      <Header></Header>
      <Article></Article>
      <Footer></Footer>
    </Container>
  )
}
export default Home
