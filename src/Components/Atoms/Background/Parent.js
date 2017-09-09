import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.white};
`

export default props => (
  <Container>
    {props.children}
  </Container>
)
