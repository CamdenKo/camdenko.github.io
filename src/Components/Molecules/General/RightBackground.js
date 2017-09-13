import React from 'react'
import styled from 'styled-components'

import {
  Red,
  RedTriangle,
  Disappearer,
} from '../../../Components'

const Container = styled.div`
  width: 100%;
`

export default props => (
  <Container>
    <Red>
      {props.children}
    </Red>
    <Disappearer>
      <RedTriangle />
    </Disappearer>
  </Container>
)
