import React from 'react'
import styled from 'styled-components'

import { media } from '../../../theme'

const Container = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.purple};
  width: 97%;
  ${
    media.phoneTablet`
      width: 100%;
      height: fit-content;
    `
  }
`

export default props => (
  <Container>
    {props.children}
  </Container>
)
