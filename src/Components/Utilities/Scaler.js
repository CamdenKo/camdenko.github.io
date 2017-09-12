import React from 'react'
import styled from 'styled-components'


export default (props) => {
  const defaultScale = 1
  const scale = props.scale || defaultScale

  const Scaler = styled.div`
    transform: scale(${scale});
    width: fit-content;
    height: fit-content;
    transform-origin: top left;
  `

  return (
    <Scaler>
      {props.children}
    </Scaler>
  )
}
