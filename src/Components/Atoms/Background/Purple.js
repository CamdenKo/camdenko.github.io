import styled from 'styled-components'

import {
  media,
} from '../../../theme'

export default styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.purple};
  width: 97%;
  ${
    media.phoneTablet`
      width: 100%;
      height: fit-content;
      animation: none;
    `
  }
`
