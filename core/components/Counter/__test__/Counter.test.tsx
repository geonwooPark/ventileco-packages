import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import TestComponent from './TestComponent'

describe('Counter Component Tests', () => {
  test('renders Counter', () => {
    render(<TestComponent />)

    expect(screen.getByRole('group')).toBeInTheDocument()
  })

  test('check if the UP button in the Counter works', async () => {
    render(<TestComponent />)

    const upButton = screen.getByLabelText('Increase counter')
    const input = screen.getByLabelText('Counter value') as HTMLInputElement
    const inputValue = Number(input.value)

    await userEvent.click(upButton)

    const updatedValue = Number(input.value)
    expect(updatedValue).toBe(inputValue + 1)
  })

  test('heck if the DOWN button in the Counter works', async () => {
    render(<TestComponent />)

    const downButton = screen.getByLabelText('Decrease counter')
    const input = screen.getByLabelText('Counter value') as HTMLInputElement
    const inputValue = Number(input.value)

    await userEvent.click(downButton)

    const updatedValue = Number(input.value)
    expect(updatedValue).toBe(inputValue - 1)
  })

  test('ㅊheck if minimal Props work correctly', async () => {
    render(<TestComponent minimum={4} />)

    const downButton = screen.getByLabelText('Decrease counter')
    const input = screen.getByLabelText('Counter value') as HTMLInputElement
    const inputValue = Number(input.value)

    await userEvent.click(downButton)

    const updatedValue = Number(input.value)
    expect(updatedValue).toBe(inputValue)
  })

  test('check if maximum Props work correctly', async () => {
    render(<TestComponent maximum={4} />)

    const upButton = screen.getByLabelText('Increase counter')
    const input = screen.getByLabelText('Counter value') as HTMLInputElement
    const inputValue = Number(input.value)

    await userEvent.click(upButton)

    const updatedValue = Number(input.value)
    expect(updatedValue).toBe(inputValue)
  })
})
