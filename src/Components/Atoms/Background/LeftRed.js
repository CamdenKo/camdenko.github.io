import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.red};
  width: 100%;
`

export default props => (
  <Container>
    {props.children}
  </Container>
)
