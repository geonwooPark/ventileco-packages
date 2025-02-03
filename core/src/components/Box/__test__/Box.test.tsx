import { render, screen } from '@testing-library/react'
import React from 'react'
import Box from '../Box'

describe('Box Component Tests', () => {
  test('check if the Box component is rendered as a button tag.', () => {
    render(<Box as="button" />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  test('check if the Box component is rendered as a A tag.', () => {
    render(
      <Box
        as="a"
        target="_blank"
        href="https://github.com/geonwooPark/ventileco-ui"
      >
        Link
      </Box>,
    )
    expect(screen.getByRole('link')).toBeInTheDocument()
  })
})
