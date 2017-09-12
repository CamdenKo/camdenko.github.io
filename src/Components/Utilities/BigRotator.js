import React from 'react'
import styled from 'styled-components'

import { media } from '../../theme'

export default (props) => {
  const Container = styled.div`
    width: fit-content;
    height: fit-content;
    transform: rotate(${props.degrees}deg);
    ${
      media.phonePhone`
        transform: rotate(0deg);
      `
    }
  `

  return (
    <Container>
      {props.children}
    </Container>
  )
}
