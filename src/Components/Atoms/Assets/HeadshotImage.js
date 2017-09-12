import React from 'react'
import styled from 'styled-components'

import picture from '../../../../public/assets/Headshot_burned.png'

const Headshot = styled.img`
  display: block;
  width: fit-content;
  height: fit-content;
  transform: scale(0.8);
`

export default () => (
  <Headshot src={picture} alt="Headshot" />
)
