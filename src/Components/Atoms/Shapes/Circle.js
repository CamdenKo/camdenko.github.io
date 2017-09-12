import React from 'react'
import styled from 'styled-components'

const defaultSize = '98'

export default (props) => {
  const size = props.size || defaultSize
  const Circle = styled.div`
    width: ${size}px;
    height: ${size}px;
    border: 18px solid ${({ theme }) => theme.white};
    border-radius: 100px;
    box-sizing: border-box;
  `

  return (
    <Circle />
  )
}
