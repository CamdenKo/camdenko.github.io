import React from 'react'
import styled, { keyframes } from 'styled-components'

import { media } from '../../../theme'

import {
  BodyText,
} from '../../../Components'

const bioAnimation = keyframes`
  from {
    transform: translateX(15px);
  }
  to {
    opacity: 1;
  }
`

const Bio = BodyText.extend`
  max-width: 420px;
  padding: 0 35px;
  box-sizing: border-box;
  opacity: 0;
  animation: ${bioAnimation} .3s ease forwards;
  animation-delay: 2s;
  ${
    media.phoneTablet`
      animation-delay: 1.8s;
    `
  }
`

export default () => (
  <Bio>
    Born and raised in Aurora, IL. Interested in problem solving, mathematics, philosophy, and discovering how many licks it takes to get to the center of a Tootsie Pop. Feel free to reach out with opportunities.
  </Bio>
)
