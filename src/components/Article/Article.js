import React from 'react'
import styled from 'styled-components'

import Card from 'components/Card'
import Inputs from 'components/Inputs'

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

function Article() {
  return (
    <Container>
      <Wrapper>
        <Card />
        <Inputs />
      </Wrapper>
    </Container>
  )
}

export default Article
