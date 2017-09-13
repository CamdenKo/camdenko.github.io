import React from 'react'
import styled from 'styled-components'

const Triangle = styled.div`
  width: 0;
  height: 0;
  z-index: -1;
  border-bottom: 100vh solid ${({ theme }) => theme.purple};
  border-right: 100vh solid transparent;
`

export default () => (
  <Triangle />
)
