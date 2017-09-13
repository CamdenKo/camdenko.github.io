import React from 'react'
import styled from 'styled-components'

export default (props) => {
  const Container = styled.div`
    position: absolute;
    height: fit-content;
    width: fit-content;
    top: ${typeof props.top === 'number' ? `${props.top}px` : props.top};
    left: ${typeof props.left === 'number' ? `${props.left}px` : props.left};
  `

  return (
    <Container>
      {props.children}
    </Container>
  )
}
