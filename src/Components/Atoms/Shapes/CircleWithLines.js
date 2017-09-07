import React from 'react'
import styled from 'styled-components'

const BoxSpacing = '30px'

const Circle = styled.div`
  height: 500px;
  width: 500px;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.yellow},
    ${({ theme }) => theme.yellow} 60%,
    ${({ theme }) => theme.purple} 40%,
    ${({ theme }) => theme.purple}
  );
  display: flex;
  border-radius: 500px;
  overflow: hidden;
  padding-top: ${BoxSpacing};
  box-sizing: border-box;
  background-size: 100% 50px;
`
export default () => (
  <Circle />
)
