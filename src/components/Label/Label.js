import React from 'react'
import styled from 'styled-components'

const Label = styled.div`
  width: ${(props) => props.width || '185px'};
  height: ${(props) => props.height || '16px'};
  text-align: ${(props) => props.textAlign || 'left'};
  font-family: Verdana;
  font-size: ${(props) => props.fontSize || '13px'};
  letter-spacing: ${(props) => props.letterSpacing || '-0.01px'};
  line-height: ${(props) => props.lineHeight || '13px'};
  color: ${(props) => props.color || props.theme.colors.white};
  opacity: 1;
  margin: ${(props) => props.margin};
  text-shadow: ${(props) => props.textShadow};
  box-sizing: border-box;
  padding: ${(props) => props.padding};
`

export function LabelWithIcon(
  children,
  startIcon = null,
  endIcon = null,
  handleOnClick
) {
  return (
    <div onClick={handleOnClick}>
      {startIcon} <Label>{children}</Label> {endIcon}
    </div>
  )
}
export default Label
