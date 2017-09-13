import React from 'react'
import styled from 'styled-components'

const Text = styled.p`
  font-size: 35px;
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  color: ${({ theme }) => theme.white};
  margin: 0;
`

export default props => (
  <Text>
    {props.children}
  </Text>
)
