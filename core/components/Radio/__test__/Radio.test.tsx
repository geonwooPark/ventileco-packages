import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TestComponent from './TestComponent'
import React from 'react'

describe('Radio Component Tests', () => {
  test('renders Radio', () => {
    render(<TestComponent />)

    expect(screen.getByRole('radiogroup')).toBeInTheDocument()
  })

  test('selecting an option using mouse interaction', async () => {
    render(<TestComponent />)

    const radioGroup = screen.getAllByRole('radio')
    const firstRadioButton = radioGroup[0]

    await userEvent.click(firstRadioButton)

    expect(firstRadioButton).toBeChecked()
  })

  test('selecting an option using keyboard interaction', async () => {
    render(<TestComponent />)
    const radioGroup = screen.getAllByRole('radio')
    const firstRadioButton = radioGroup[0]

    await userEvent.keyboard('[Tab][Enter]')

    expect(firstRadioButton).toBeChecked()
  })
})
