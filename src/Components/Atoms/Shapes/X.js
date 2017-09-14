import React from 'react'
import styled from 'styled-components'

import utilities from '../../../utilities'

const randomRange1 = [-20, -10]
const randomRange2 = [10, 20]

export default (props) => {
  const Container = styled.div`
    width: 98px;
    height: 98px;
    font-size: ${props.size || '98'}px;
    color: white;
    line-height: 98px;
    text-align: center;
    font-family: helvetica;
    font-weight: 400;
    transition: transform 1s;

    &:hover {
      transform: rotate(${utilities.doubleRangeRandom(...randomRange1, ...randomRange2)}deg) translateX(${utilities.doubleRangeRandom(...randomRange1, ...randomRange2)}px);
    }
  `

  return (
    <Container>
      X
    </Container>
  )
}
