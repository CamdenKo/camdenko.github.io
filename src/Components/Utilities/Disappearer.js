import React from 'react'
import styled from 'styled-components'

import { media } from '../../theme'

const Container = styled.div`
  ${
    media.phoneTablet`
      display: none;
    `
  }
  width: fit-content;
  height: fit-content;
`

export default props => (
  <Container>
    {props.children}
  </Container>
)
