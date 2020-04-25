import React from 'react'
import styled from 'styled-components'
import { ReactComponent as LogoIcon } from 'assets/logo.svg'
import Rectangle from '../Rectangle'

const Container = styled.header`
  width: 100%;
  height: ${(props) => props.theme.sizes.HEIGHT_HEADER}px;
  background-color: ${(props) => props.theme.colors.white};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  // width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    max-width: ${(props) => props.theme.sizes.WIDTH_CONTENT}px;
    width: 100%;
    justify-content: space-between;
    flex-wrap: initial;
  }
`
const Logo = styled(LogoIcon)`
  width: 260px;
  height: 42px;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 640px;
  }
`

function Header() {
  return (
    <Container>
      <Wrapper>
        <Logo />
        <Menu>
          <Rectangle
            height="18px"
            backgroundColor="#3C3C3C"
            borderRadius="5px"
            opacity="0.6"
            margin="0 18px"
          />
          <Rectangle
            height="18px"
            backgroundColor="#3C3C3C"
            borderRadius="5px"
            opacity="0.6"
            margin="0 18px"
          />
          <Rectangle
            height="18px"
            backgroundColor="#3C3C3C"
            borderRadius="5px"
            opacity="0.6"
            margin="0 18px"
          />
        </Menu>
      </Wrapper>
    </Container>
  )
}
export default Header
