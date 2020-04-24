import React from 'react'
import styled from 'styled-components'
import Colors from 'components/Colors'
import constants from 'config/constants'
import Rectangle from 'components/Rectangle'
const Container = styled.footer`
  width: 100%;
  height: ${constants.HEIGHT_FOOTER}px;
  background-color: ${Colors.white};
  bottom: 0px;
  display: flex;
  justify-content: center;
`
const Wrapper = styled.div`
  width: ${constants.WIDTH_CONTENT}px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

function Footer() {
  return (
    <Container>
      <Wrapper>
        <Rectangle
          width="1076px"
          height="12px"
          backgroundColor="#3C3C3C"
          borderRadius="5px"
          opacity="0.3"
        ></Rectangle>
      </Wrapper>
    </Container>
  )
}
export default Footer
