import React from 'react'
import styled from 'styled-components'
import SideBar from 'components/SideBar'

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  opacity: 1;
  width: 100%;
  height: 350px;
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
