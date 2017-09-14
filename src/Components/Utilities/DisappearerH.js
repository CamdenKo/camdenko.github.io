import React from 'react'
import styled from 'styled-components'

import { mediaHeight } from '../../theme'

const Container = styled.div`
  ${
    mediaHeight.phoneTablet`
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
