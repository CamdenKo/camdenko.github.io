import React from 'react'
import styled from 'styled-components'

const Circle = styled.div`
  width: 98px;
  height: 98px;
  border: 20px solid ${({ theme }) => theme.white};
  border-radius: 100px;
  box-sizing: border-box;
`

export default () => (
  <Circle />
)
