import React, { useState } from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import Header from 'components/Header'
import Article from 'components/Article'
import Footer from 'components/Footer'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import CreditCardContext from 'components/CreditCardContext'
const Container = styled.div`
  width: 100%;
  height: 100%;
`

function Home() {
  const themeContext = useContext(ThemeContext)
  const isDesktop = useMediaQuery({
    minWidth: themeContext.breakpoints.md,
  })
  const [creditCard, setCreditCard] = useState({
    number: '',
    name: '',
    expirationDate: '',
    cvv: '',
    quantityParcels: 0,
  })

  const save = (obj) => {
    setCreditCard({ ...creditCard, ...obj })
  }

  return (
    <Container>
      {isDesktop && <Header />}
      <CreditCardContext.Provider value={{ creditCard, save: save }}>
        <Article />
      </CreditCardContext.Provider>
      {isDesktop && <Footer />}
    </Container>
  )
}
export default Home
