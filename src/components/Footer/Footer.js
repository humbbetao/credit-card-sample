import React from 'react'
import styled from 'styled-components'
import Rectangle from 'components/Rectangle'

const Container = styled.footer`
  width: 100%;
  height: ${(props) => props.theme.sizes.HEIGHT_FOOTER}px;
  background-color: ${(props) => props.theme.colors.white};
  bottom: 0px;
  display: flex;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    width: ${(props) => props.theme.sizes.WIDTH_CONTENT}px;
  }
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
