import React from 'react'
import styled from 'styled-components'

import utilities from '../../../utilities'

const defaultSize = '98'
const randomRange1 = [-20, -10]
const randomRange2 = [10, 20]

export default (props) => {
  const size = props.size || defaultSize
  const Circle = styled.div`
    width: ${size}px;
    height: ${size}px;
    border: 18px solid ${({ theme }) => theme.white};
    border-radius: 100px;
    box-sizing: border-box;
    transition: transform 1s;

    &:hover {
      transform: translateX(${utilities.doubleRangeRandom(...randomRange1, ...randomRange2)}px) translateY(${utilities.doubleRangeRandom(...randomRange1, ...randomRange2)}px);
    }
  `

  return (
    <Circle />
  )
}
