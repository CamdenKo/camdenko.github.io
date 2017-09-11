import React from 'react'
import styled from 'styled-components'

import { media } from '../../theme'

const Container = styled.div`
  ${
    media.phonePhone`
      display: none;
    `
  }
`

export default ToWrap => (
  <Container>
    <ToWrap />
  </Container>
)
