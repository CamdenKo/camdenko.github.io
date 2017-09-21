import React from 'react'
import {
  storiesOf,
} from '@storybook/react'

import {
  MobileNav,
  Nav,
  Headshot,
  JobTitle,
  LeftBackground,
  RightBackground,
  CombinedBackground,
  VideoDock,
} from '../Components'

const links = [
  { name: 'Github', url: 'https://github.com/CamdenKo' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/camden-ko-7202a2103/' },
  { name: 'Medium', url: 'https://medium.com/@camdenko' },
  { name: 'Resume', url: 'https://www.scribd.com/document/358913646/Camden-Ko-Resume' },
]

const videos = [
  { name: '.io Server Architecture', src: 'https://www.youtube.com/embed/t-PPgiLmaoo?rel=0%22' },
  { name: 'Summary Bot Webapp', src: 'https://www.youtube.com/embed/NFL1BhXze_4?rel=0%22' },
]

storiesOf('Molecules/Navigation', module)
.add('MobileNav', () => <MobileNav links={links} />)
.add('Nav', () => <Nav links={links} />)

storiesOf('Molecules/HomePage', module)
.add('Headshot', () => <Headshot />)
.add('JobTitle', () => (
  <div style={{ backgroundColor: 'purple', padding: '30px' }}>
    <JobTitle />
  </div>
))
.add('Video Dock', () => <VideoDock videos={videos} />)

storiesOf('Molecules/General', module)
.add('Left Background', () => <LeftBackground>TEXT</LeftBackground>)
.add('Right Background', () => <RightBackground>TEXT</RightBackground>)
.add('Combined Background', () => <CombinedBackground />)
