import React from 'react'
import styled from 'styled-components'

const BoxSpacing = '30px'

const Circle = styled.div`
  height: 500px;
  width: 500px;
  background: linear-gradient(
    to bottom,
    ${props => props.theme.yellow},
    ${props => props.theme.yellow} 50%,
    ${props => props.theme.purple} 50%,
    ${props => props.theme.purple}
  );
  display: flex;
  border-radius: 500px;
  overflow: hidden;
  padding-top: ${BoxSpacing};
  box-sizing: border-box;
`
export default () => (
  <Circle />
)
