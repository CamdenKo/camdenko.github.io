import React from 'react'

import Name from './Name'
import Word from './Word'

const padding = '2rem'

export default () => (
  <div>
    <Name />
    <Word
      word="Contact Me"
      top={padding}
      left={padding}
    />
    <Word
      word="Projects"
      top={padding}
      right={padding}
    />
    <Word
      word="Experience"
      right={padding}
      bottom={padding}
    />
    <Word
      word="Education"
      bottom={padding}
      left={padding}
    />
  </div>
)
