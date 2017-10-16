import React from 'react'
import styled from 'styled-components'

import {
  Purple,
  PurpleTriangle,
  Disappearer,
} from '../../../Components'

const Container = styled.section`
  width: 100%;
`

export default props => (
  <Container>
    <Purple>
      {props.children}
    </Purple>
    <Disappearer>
      <PurpleTriangle />
    </Disappearer>
  </Container>
)
