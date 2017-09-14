import React from 'react'
import styled from 'styled-components'

import {
  BodyText,
} from '../../../Components'

const Container = styled.div`
  max-width: 420px;
  padding: 0 35px;
  box-sizing: border-box;
`

export default () => (
  <Container>
    <BodyText>Born and raised in Aurora
    IL. Versed in the dark arts
    of web development. Teaching fellow @ Fullstack Academy. Hip-hop, React, Medium.com</BodyText>
  </Container>
)
