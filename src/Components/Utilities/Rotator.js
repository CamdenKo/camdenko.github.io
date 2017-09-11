import React from 'react'
import styled from 'styled-components'

import { media } from '../../theme'


export default (props) => {
  const Container = styled.div`
    ${
      media.phonePhone`
        transform: rotate(${props.degrees}deg);
      `
    }
    width: fit-content;
    height: fit-content;
  `

  return (
    <Container>
      {props.children}
    </Container>
  )
}
