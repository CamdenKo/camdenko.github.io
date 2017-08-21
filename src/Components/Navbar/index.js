import React from 'react'
import styles from 'styled-components'

import Name from './Name'
import Word from './Word'
import GridWord from './GridWord'

const size = '5rem'
const Grid = styles.div`
display: grid;
grid-template-columns: ${size} auto ${size};
grid-template-rows: ${size} auto ${size};
width: 100%;
height: 100%;
padding: 2rem;
box-sizing: border-box;
`

export default () => (
  <Grid>
    <Name />
    <GridWord
      gridColumn={1}
      gridRow={1}
      word="Contact Me"
    />
    <GridWord
      gridColumn={3}
      gridRow={1}
      word="Projects"
    />
    <GridWord
      gridColumn={3}
      gridRow={3}
      word="Experience"
    />
    <GridWord
      gridColumn={1}
      gridRow={3}
      word="Education"
    />
  </Grid>
)
