import React from 'react'
import styled from 'styled-components'
import Colors from 'components/Colors'
import { ReactComponent as LogoIcon } from 'assets/logo.svg'
import constants from 'config/constants'
import Rectangle from '../Rectangle'

const Container = styled.header`
  width: 100%;
  height: ${constants.HEIGHT_HEADER}px;
  background-color: ${Colors.white};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  width: ${constants.WIDTH_CONTENT}px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Logo = styled(LogoIcon)`
  width: 260px;
  height: 42px;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 640px;
  flex-direction: row;
`

function Header() {
  return (
    <Container>
      <Wrapper>
        <Logo />
        <Menu>
          <Rectangle
            width="100px"
            height="18px"
            backgroundColor="#3C3C3C"
            borderRadius="5px"
            opacity="0.6"
            margin="0 18px"
          />
          <Rectangle
            width="100px"
            height="18px"
            backgroundColor="#3C3C3C"
            borderRadius="5px"
            opacity="0.6"
            margin="0 18px"
          />
          <Rectangle
            width="100px"
            height="18px"
            backgroundColor="#3C3C3C"
            borderRadius="5px"
            opacity="0.6"
            margin="0 18px"
          />
          <Rectangle
            width="100px"
            height="18px"
            backgroundColor="#3C3C3C"
            borderRadius="5px"
            opacity="0.6"
            margin="0 18px"
          />
          <Rectangle
            width="100px"
            height="18px"
            backgroundColor="#3C3C3C"
            borderRadius="5px"
            opacity="0.6"
            margin="0 0 0 18px"
          />
        </Menu>
      </Wrapper>
    </Container>
  )
}
export default Header
