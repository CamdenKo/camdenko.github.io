import React from 'react'
import styled from 'styled-components'

import { media, mediaHeight } from '../../../theme'

const Container = styled.div`
  text-align: left;
  font-size: 20px;
  font-family: Open Sans;
  line-height: 30px;
  font-weight: 100;
  color: ${({ theme }) => theme.white};
  ${
    media.phoneTablet`
      font-size: 20px;
    `
  }
  ${
    mediaHeight.phoneTablet`
      font-size: 15px;
    `
  }
`

export default props => (
  <Container>
    {props.children}
  </Container>
)
