import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-size: 63px;
  color: ${({ theme }) => theme.white};
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  font-weight: 100;
`

export default props => (
  <Container>
    {props.children}
  </Container>
)
