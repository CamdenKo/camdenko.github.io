import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  text-align: left;
  font-size: 30px;
  font-family: Open Sans;
  line-height: 30px;
  font-weight: 100;
  color: ${({ theme }) => theme.white};
`

export default props => (
  <Container>
    {props.children}
  </Container>
)
