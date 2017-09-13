import React from 'react'
import styled from 'styled-components'

import { media } from '../../../theme'

const Text = styled.p`
  font-size: 35px;
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  color: ${({ theme }) => theme.white};
  margin: 0;
  ${
    media.phoneTablet`
      font-size: 5vw;
    `
  }
`

export default props => (
  <Text>
    {props.children}
  </Text>
)
