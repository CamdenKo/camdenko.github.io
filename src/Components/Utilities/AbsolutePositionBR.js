import React from 'react'
import styled from 'styled-components'

export default (props) => {
  const Container = styled.div`
    position: absolute;
    height: fit-content;
    width: fit-content;
    bottom: ${typeof props.bottom === 'number' ? `${props.bottom}px` : props.bottom};
    right: ${typeof props.right === 'number' ? `${props.right}px` : props.right};
  `

  return (
    <Container>
      {props.children}
    </Container>
  )
}
