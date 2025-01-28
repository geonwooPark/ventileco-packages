import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TestComponent from './TestComponent'
import React from 'react'

describe('CheckBox Component Tests', () => {
  test('renders CheckBox', () => {
    render(<TestComponent />)
    const checkbox = screen.getByRole('group')

    expect(checkbox).toBeInTheDocument()
  })

  test('selecting an option using mouse interaction', async () => {
    render(<TestComponent />)
    const checkboxes = screen.getAllByRole('checkbox')
    const firstCheckbox = checkboxes[0]

    await userEvent.click(firstCheckbox)

    expect(firstCheckbox).toBeChecked()
  })

  test('selecting an option using keyboard interaction', async () => {
    render(<TestComponent />)
    const checkboxes = screen.getAllByRole('checkbox')
    const firstCheckbox = checkboxes[0]

    await userEvent.keyboard('[Tab][Enter]')

    expect(firstCheckbox).toBeChecked()
  })
})
