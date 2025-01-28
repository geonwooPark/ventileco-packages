import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import TestComponent from './TestComponent'

describe('Accordion Component Tests', () => {
  test('renders Accordion', () => {
    render(<TestComponent />)
    expect(screen.getByRole('tablist')).toBeInTheDocument()
  })

  test('selecting an option using mouse interaction', async () => {
    render(<TestComponent />)

    const headings = screen.getAllByRole('heading')

    await userEvent.click(headings[0])
    const regions = screen.getAllByRole('region')

    expect(regions[0]).toHaveTextContent('Content1')
  })

  test('selecting an option using keyboard interaction', async () => {
    render(<TestComponent />)

    await userEvent.tab()
    await userEvent.keyboard('{Enter}')
    const firstContent = screen.getByText('Content1')

    expect(firstContent).toBeInTheDocument()

    await userEvent.tab()
    await userEvent.keyboard('[Enter]')
    const secondContent = screen.getByText('Content2')

    expect(secondContent).toBeInTheDocument()
  })
})
