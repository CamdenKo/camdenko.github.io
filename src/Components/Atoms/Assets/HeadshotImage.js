import React from 'react'
import styled from 'styled-components'

import picture from '../../../assets/Headshot_burned.png'

const Headshot = styled.img`
  display: block;
  width: fit-content;
  height: fit-content;
  transform: scale(0.8);
  object-fill: cover;
`

export default () => (
  <Headshot src={picture} alt="Headshot" />
)
