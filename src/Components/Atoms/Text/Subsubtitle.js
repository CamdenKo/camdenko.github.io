import styled from 'styled-components'

import { media } from '../../../theme'

export default styled.p`
  font-size: 2.4vw;
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  color: ${({ theme }) => theme.white};
  margin: 0;
  font-weight: 100;
  ${
    media.phoneTablet`
      font-size: 5vw;
    `
  }
`
