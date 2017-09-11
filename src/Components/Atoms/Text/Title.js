import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: ${({ theme }) => theme.yellow};
  width: fit-content;
  font-family: ${({ theme }) => theme.primaryFontFamily};
  font-size: 111px;
  font-weight: 900;
  padding: 0 20px;
`

export default props => (
  <Container>
    {props.children}
  </Container>
)