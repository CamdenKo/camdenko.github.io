import React from 'react'
import styled from 'styled-components'

import { media } from '../../theme'

const Big = styled.div`
  ${
    media.phonePhone`
      display: none;
    `
  }
`

const Small = styled.div`
  display: none;
  ${
    media.phonePhone`
      display: block;
    `
  }
`

export default props => (
  <div>
    <Big>
      {props.big}
    </Big>
    <Small>
      {props.small}
    </Small>
  </div>
)
