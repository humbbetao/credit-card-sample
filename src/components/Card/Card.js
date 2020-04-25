import React from 'react'
import styled from 'styled-components'
import SideBar from 'components/SideBar'

const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 1024px;
    height: 596px;
    flex-direction: row;
  }
`

export default function Card() {
  return (
    <Container>
      <SideBar></SideBar>
    </Container>
  )
}
