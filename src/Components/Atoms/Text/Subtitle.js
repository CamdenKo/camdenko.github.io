import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-size: 50px;
  color: ${({ theme }) => theme.white};
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  font-weight: 600;
`
// TODO: Mobile responsive

export default props => (
  <Container>
    {props.children}
  </Container>
)
