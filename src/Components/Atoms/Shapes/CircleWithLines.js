import React from 'react'
import styled from 'styled-components'

const BoxSpacing = '30px'

const Circle = styled.div`
  height: 500px;
  width: 500px;
  background-color: #FFF86A;
  display: flex;
  border-radius: 500px;
  overflow: hidden;
  padding-top: ${BoxSpacing};
  box-sizing: border-box;
`

export default () => (
  <Circle>
    <Rectangle />
  </Circle>
)
