import React from 'react'
import styled from 'styled-components'

const Container = styled.nav`
  top: 0px;
  left: 0px;
  width: 100%;
  height: 239px;
  background: #de4b4b 0% 0% no-repeat padding-box;
  opacity: 1;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 352px;
    height: 596px;
  }
`

export function SideBar() {
  return <Container>ikashsdkasd</Container>
}
export default SideBar
