import React from 'react'
import ComboBox from '.'

export default {
  title: 'COMPONENTS/ComboBox',
  component: ComboBox,
  parameters: {
    layout: 'centered',
  },
}

export function Normal() {
  return <ComboBox />
}
