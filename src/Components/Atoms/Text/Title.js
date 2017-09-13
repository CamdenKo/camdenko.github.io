import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: ${({ theme }) => theme.yellow};
  width: fit-content;
  font-family: ${({ theme }) => theme.primaryFontFamily};
  font-size: 8.1vw;
  font-weight: 900;
  padding: 0 20px;
  white-space: nowrap;
  oveflow: hidden;
`

export default props => (
  <Container>
    {props.children}
  </Container>
)
