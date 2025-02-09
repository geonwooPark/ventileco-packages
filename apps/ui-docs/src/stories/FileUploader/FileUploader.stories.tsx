import React from 'react'
import FileUploader from '.'

export default {
  title: 'COMPONENTS/FileUploader',
  component: FileUploader,
  parameters: {
    layout: 'centered',
  },
}

export function Normal() {
  return <FileUploader />
}
