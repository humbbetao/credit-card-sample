import React from 'react'
import styled from 'styled-components'
import Colors from 'components/Colors'
import Card from 'components/Card'

const Container = styled.article`
  width: 100%;
  height: calc(
    100vh -
      ${(props) =>
        props.theme.sizes.HEIGHT_HEADER + props.theme.sizes.HEIGHT_FOOTER}px
  );
  flex: 1;
  background-color: ${Colors.nearWhite};
  display: flex;
  justify-content: center;
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
      </Wrapper>
    </Container>
  )
}

export default Article
