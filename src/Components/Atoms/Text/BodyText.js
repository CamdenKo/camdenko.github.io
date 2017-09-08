import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  text-align: left;
  font-size: 48px;
  font-family: Open Sans;
  color: ${({ theme }) => theme.white};
`

export default props => (
  <Container>
    {props.children}
  </Container>
)
