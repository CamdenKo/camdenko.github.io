import React from 'react'

import {
  MobileNav,
  Nav,
  DifferentComponents,
} from '../../Components'

export default () => (
  <DifferentComponents big={<Nav />} small={<MobileNav />} />
)
