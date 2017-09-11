import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  text-align: left;
  font-size: 35px;
  font-family: Open Sans;
  line-height: 29px;
  color: ${({ theme }) => theme.white};
`

export default props => (
  <Container>
    {props.children}
  </Container>
)
