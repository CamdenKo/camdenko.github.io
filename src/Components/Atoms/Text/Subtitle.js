import styled from 'styled-components'

import { media } from '../../../theme'

export default styled.h3`
  font-size: 3.5vw;
  color: ${({ theme }) => theme.white};
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  font-weight: 600;
  margin: 0;
  ${
    media.phoneTablet`
      font-size: 9vw;
    `
  }
`
