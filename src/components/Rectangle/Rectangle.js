import styled from 'styled-components'

const Rectangle = styled.div`
  width: ${(props) => props.width || '100px'};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  opacity: ${(props) => props.opacity};
  border-radius: ${(props) => props.borderRadius};
  margin: ${(props) => props.margin};
`

export default Rectangle
