import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: fit-content;
  background-color: ${({ theme }) => theme.yellow}
`

export default props => (
  <Container>
    {props.children}
  </Container>
)
