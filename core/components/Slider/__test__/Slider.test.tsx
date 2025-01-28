import { render, screen } from '@testing-library/react'
import TestComponent from './TestComponent'
import React from 'react'

describe('Slider Component Tests', () => {
  test('renders Slider', () => {
    render(<TestComponent />)
    expect(screen.getByRole('slider')).toBeInTheDocument()
  })
})
