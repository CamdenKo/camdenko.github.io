import React from 'react'
import styled from 'styled-components'


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
  `

  return (
    <Container>
      X
    </Container>
  )
}
