import React from 'react'

import {
  MobileNav,
  Nav,
  DifferentComponents,
} from '../../Components'

export default props => (
  <DifferentComponents big={<Nav {...props} />} small={<MobileNav {...props} />} />
)
