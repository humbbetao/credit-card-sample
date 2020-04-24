import React from 'react'
import styled from 'styled-components'
import Colors from 'components/Colors'

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
`

function Article() {
  return (
    <Container>
      <Wrapper>NOVKK</Wrapper>
    </Container>
  )
}

export default Article
