import React from 'react'
import styled from 'styled-components'
import Colors from 'components/Colors'
import constants from 'config/constants'

const Container = styled.footer`
  width: 100%;
  height: ${constants.HEIGHT_FOOTER}px;
  background-color: ${Colors.white};
  bottom: 0px;
  margin: auto;
`

function Footer() {
  return <Container>hh</Container>
}
export default Footer
