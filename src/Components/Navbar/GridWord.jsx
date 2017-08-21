import React from 'react'
import styled from 'styled-components'

export default (props) => {
  const Div = styled.div`
    grid-column: ${props.gridColumn};
    grid-row: ${props.gridRow};
    text-align: ${props.gridColumn === 1 ? 'left' : 'right'};
    display: flex;
    justify-content: ${props.gridColumn === 1 ? 'flex-start' : 'flex-end'};
  `

  const WordWrapper = styled.div`
    align-self: ${props.gridRow === 1 ? 'flex-start' : 'flex-end'};
  `
  return (
    <Div>
      <WordWrapper>
        {props.word}
      </WordWrapper>
    </Div>
  )
}
