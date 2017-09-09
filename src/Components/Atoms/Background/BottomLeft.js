import React from 'react'
import styled from 'styled-components'


export default (props) => {
  const Shape = styled.div`
    background-color: ${({ theme }) => props.inverted ? theme.red : theme.purple};
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
  `

  return (
    <Shape>
      {props.children}
    </Shape>
  )
}
