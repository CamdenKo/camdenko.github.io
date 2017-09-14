import React from 'react'
import styled from 'styled-components'

import { media, mediaHeight } from '../../theme'

export default (props) => {
  const Container = styled.div`
    width: fit-content;
    height: fit-content;
    transform: rotate(${props.degrees}deg);
    ${
      media.phoneTablet`
        transform: rotate(0deg);
      `
    }
    ${
      mediaHeight.phoneTablet`
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
