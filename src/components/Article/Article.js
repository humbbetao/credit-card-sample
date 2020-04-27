import React from 'react'
import styled from 'styled-components'
import Inputs from 'components/Inputs'
import SideBar from 'components/SideBar'

const Container = styled.article`
  width: 100%;
  height: calc(
    100vh -
      ${(props) =>
        props.theme.sizes.HEIGHT_HEADER + props.theme.sizes.HEIGHT_FOOTER}px
  );
  flex: 1;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: center;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    background-color: ${(props) => props.theme.colors.nearWhite};
  }
`

const Wrapper = styled.div`
  width: ${(props) => props.theme.sizes.WIDTH_CONTENT}px;
  height: 100%;
  padding: 0px;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    padding: 65px 0px;
  }
`

const ContainerSideBar = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 1024px;
    height: 596px;
    flex-direction: row;
    float: left;
  }
`
function Article() {
  return (
    <Container>
      <Wrapper>
        <ContainerSideBar>
          <SideBar></SideBar>
          <Inputs />
        </ContainerSideBar>
      </Wrapper>
    </Container>
  )
}

export default Article
