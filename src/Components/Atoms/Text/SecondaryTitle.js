import React from 'react'
import styled, { keyframes } from 'styled-components'

import { media } from '../../../theme'

const loadAnimationM = keyframes`
  from {
    background-position: 100%;
  }

  to {
    background-position: 0;
  }
`

const loadAnimation = keyframes`
  from {
    background-position: 0 100%;
  }

  to {
    background-position: 0 0;
  }
`

const changeBackground = keyframes`
  from {
  }
  to {
    background-image: linear-gradient(to top, transparent 50%, black 50%);
  }
`

export default (props) => {
  const delay = props.delay || 0
  const Container = styled.h6`
    ${
      media.phoneTablet`
        background-image: linear-gradient(to left, transparent 50%, black 50%);
        background-size: 200% 100%;
        animation ${loadAnimationM} 0.8s linear;
      `
    }
    // background-image: linear-gradient(to top, transparent 50.2%, black 49.8%);
    background-size: 100% 200%;
    background-color: transparent;
    animation ${loadAnimation} 0.8s linear forwards, ${changeBackground} 0.0000000001s linear forwards;
    animation-delay: ${delay}s;
    color: ${props.active ? ({ theme }) => theme.white : ({ theme }) => theme.black};
    font-family: ${({ theme }) => theme.primaryFontFamily};
    font-weight: 600;
    padding: ${props.padding || '0'};
    font-size: 40px;
    width: fit-content;
    overflow: hidden;
    white-space: nowrap;
    margin: 0;
  `

  return (
    <Container>
      {props.children}
    </Container>
  )
}
