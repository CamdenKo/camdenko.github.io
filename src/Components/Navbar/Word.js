import React from 'react'
import styled from 'styled-components'

const Div = styled.div.attrs({
  left: props => props.left || 'auto',
  right: props => props.right || 'auto',
  top: props => props.top || 'auto',
  bottom: props => props.bottom || 'auto',
})`
  position: absolute;
  left: ${props => props.left};
  right: ${props => props.right};
  top: ${props => props.top};
  bottom: ${props => props.bottom};
`

export default props => (
  <Div {...props}>
    {props.word}
  </Div>
)
