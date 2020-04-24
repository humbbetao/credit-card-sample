import React from 'react'
import styled from 'styled-components'
import Colors from 'components/Colors'
import { ReactComponent as LogoIcon } from 'assets/logo.svg'
import constants from 'config/constants'

const Container = styled.header`
  width: 100%;
  height: ${constants.HEIGHT_HEADER}px;
  background-color: ${Colors.white};
  margin: auto;
`

const Logo = styled(LogoIcon)`
  width: 260px;
  height: 42px;
`

function Header() {
  return (
    <Container>
      <Logo />
    </Container>
  )
}
export default Header
