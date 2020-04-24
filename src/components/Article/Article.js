import React from 'react'
import styled from 'styled-components'
import Colors from 'components/Colors'
import constants from 'config/constants'
const Container = styled.article`
  width: 100%;
  height: calc(100vh - ${constants.HEIGHT_HEADER + constants.HEIGHT_FOOTER}px);
  flex: 1;
  background-color: ${Colors.nearWhite};
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  width: ${constants.WIDTH_CONTENT}px;
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
