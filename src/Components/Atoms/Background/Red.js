import styled from 'styled-components'

import { media } from '../../../theme'

export default styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.red};
  width: 100%;
  ${
    media.phoneTablet`
      width: 100%;
      height: fit-content;
    `
  }
`

