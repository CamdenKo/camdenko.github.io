import React from 'react'
import styled from 'styled-components'

import {
  StaticRotator,
} from '../../../Components'

const Container = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${({ theme }) => theme.yellow};
`

export default props => (
  <StaticRotator degrees={10}>
    <Container>
      {props.children}
    </Container>
  </StaticRotator>
)
