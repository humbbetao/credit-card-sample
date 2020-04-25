import React from 'react'
import styled from 'styled-components'

const Label = styled.div`
  width: 185px;
  height: 16px;
  text-align: left;
  font: Regular 13px/22px Verdana;
  letter-spacing: -0.01px;
  color: ${(props) => props.color || props.theme.colors.white};
  opacity: 1;
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
