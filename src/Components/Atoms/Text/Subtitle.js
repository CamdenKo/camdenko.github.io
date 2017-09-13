import React from 'react'
import styled from 'styled-components'

import { media } from '../../../theme'

const Container = styled.div`
  font-size: 50px;
  color: ${({ theme }) => theme.white};
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  font-weight: 600;
  ${
    media.phoneTablet`
      font-size: 30px;
    `
  }
`
// TODO: Mobile responsive

export default props => (
  <Container>
    {props.children}
  </Container>
)
