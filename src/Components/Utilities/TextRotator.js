import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  text-orientation: sideways;
  writing-mode: vertical-rl;
`

export default props => (
  <Container>
    {props.children}
  </Container>
)
