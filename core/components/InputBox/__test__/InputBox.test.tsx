import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TestComponent from './TestComponent'
import React from 'react'

describe('InputBox Component Tests', () => {
  it('renders InputBox', () => {
    render(<TestComponent />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('typing into a input component', async () => {
    render(<TestComponent />)

    const input = screen.getByRole('textbox') as HTMLInputElement
    await userEvent.type(input, 'asd')

    await waitFor(() => {
      expect(input.value).toBe('asd')
    })
  })
})
