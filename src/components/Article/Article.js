import React from 'react'
import styled from 'styled-components'
import Colors from 'components/Colors'
import constants from 'config/constants'
const Container = styled.article`
  width: 100%;
  height: calc(100vh - ${constants.HEIGHT_HEADER + constants.HEIGHT_FOOTER}px);
  flex: 1;
  display: flex;
  background-color: ${Colors.nearWhite};
`

function Article() {
  return <Container>hhhh</Container>
}

export default Article
