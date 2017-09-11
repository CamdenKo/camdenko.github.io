import React from 'react'
import styled from 'styled-components'

import { media } from '../../../theme'
import {
  Disappearer,
} from '../../../Components'

const Container = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${({ theme }) => theme.yellow};
  ${
    media.phonePhone`

    `
  }
`

export default () =>
