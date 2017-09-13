import React from 'react'
import styled from 'styled-components'

import { media } from '../../../theme'

const Container = styled.div`
  font-size: 3.5vw;
  color: ${({ theme }) => theme.white};
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  font-weight: 600;
  ${
    media.phoneTablet`
      font-size: 9vw;
    `
  }
`

export default props => (
  <Container>
    {props.children}
  </Container>
)
