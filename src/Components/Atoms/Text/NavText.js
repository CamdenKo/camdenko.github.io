import React from 'react'
import styled from 'styled-components'

import { media } from '../../../theme'

export default (props) => {
  const Container = styled.div`
    color: ${({ theme }) => props.active ? theme.white : theme.black};
    background-color: ${props.active ? ({ theme }) => theme.black : 'transparent'};
    font-size: 30px;
    font-weight: 200;
    font-family: Raleway;
    width: 100%;
    cursor: pointer;
  `

  return (
    <Container onClick={props.onClick}>
      {props.children}
    </Container>
  )
}
