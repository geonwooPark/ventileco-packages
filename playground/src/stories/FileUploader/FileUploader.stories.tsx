import React from 'react'
import VFileUploader from '.'

export default {
  title: 'COMPONENTS/FileUploader',
  component: VFileUploader,
  parameters: {
    layout: 'centered',
  },
}

export function Normal() {
  return <VFileUploader />
}
