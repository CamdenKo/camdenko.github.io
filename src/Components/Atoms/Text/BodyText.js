import React from 'react'
import styled from 'styled-components'

import { media } from '../../../theme'

const Container = styled.div`
  text-align: left;
  font-size: 30px;
  font-family: Open Sans;
  line-height: 30px;
  font-weight: 100;
  color: ${({ theme }) => theme.white};
  ${
    media.phoneTablet`
      font-size: 20px;
    `
  }
`

export default props => (
  <Container>
    {props.children}
  </Container>
)
