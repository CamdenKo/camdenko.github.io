import React from 'react'
import styled from 'styled-components'

import { media } from '../../theme'


export default (props) => {
  const Container = styled.div`
    ${media.phonePhone`
      transform: rotate(${props.degrees}deg);
    `}
  `

  return (
    <Container>
      {props.children}
    </Container>
  )
}
