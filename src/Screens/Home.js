import React from 'react'
import styled from 'styled-components'

import {
  LeftHome,
  RightHome,
  Navigation,
} from '../Components'
import { media, mediaHeight } from '../theme'

const Container = styled.div`
  display: flex;
  width: 100%;
  ${
    media.phoneTablet`
      flex-direction: column;
    `
  }
`

const NavigationWrapper = styled.div`
  position: absolute;
  top: 3vw;
  z-index: 100;
  right: 3vw;
  ${
    media.tabletTablet`
      transform: scale(0.7);
    `
  }
  ${
    media.phoneTablet`
      position: relative;
      top: 0;
      right: 0;
      transform: scale(1.0);
    `
  }
  ${
    mediaHeight.phoneTablet`
      top: -13vh;
      right: -8vw;
      transform: scale(0.5);
    `
  }
`

const links = [
  { name: 'Github', url: 'https://github.com/CamdenKo' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/camden-ko-7202a2103/' },
  { name: 'Medium', url: 'https://medium.com/@camdenko' },
  { name: 'Resume', url: 'https://www.scribd.com/document/358913646/Camden-Ko-Resume' },
]

export default () => (
  <Container>
    <NavigationWrapper>
      <Navigation links={links} />
    </NavigationWrapper>
    <LeftHome />
    <RightHome />
  </Container>
)
