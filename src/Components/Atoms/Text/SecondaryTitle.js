import React from 'react'
import styled, { keyframes } from 'styled-components'

import { media } from '../../../theme'

const loadAnimationM = keyframes`
  from {
    background-position: 0;
  }

  to {
    background-position: 100%;
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

export default (props) => {
  const Container = styled.h6`
    ${
      media.phoneTablet`
        background-image: linear-gradient(to left, black 49.8%, transparent 50.2%);
        background-size: 200% 100%;
        animation ${loadAnimationM} 1.4s linear;
        background-position: 100%;
      `
    }
    animation-fill-mode: forwards;
    background-image: linear-gradient(to top, transparent 50.2%, black 49.8%);
    background-size: 100% 200%;
    animation ${loadAnimation} 1.4s linear;
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
