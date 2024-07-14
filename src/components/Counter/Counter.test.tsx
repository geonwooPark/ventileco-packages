import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from './CounterMain'
import { useState } from 'react'

export function TestComponent({
  maximum,
  minimum,
}: {
  maximum?: number
  minimum?: number
}) {
  const [value, setValue] = useState(4)

  return (
    <Counter
      value={value}
      setValue={setValue}
      maximum={maximum}
      minimum={minimum}
    >
      <Counter.Up></Counter.Up>
      <Counter.Number />
      <Counter.Down></Counter.Down>
    </Counter>
  )
}

describe('Counter', () => {
  it('Counter 컴포넌트가 렌더링되는지 확인', () => {
    render(<TestComponent />)
    expect(screen.getByRole('group')).toBeInTheDocument()
  })

  it('Counter의 UP 버튼이 동작하는지 확인', async () => {
    render(<TestComponent />)

    const upButton = screen.getByLabelText('Increase counter')
    const input = screen.getByLabelText('Counter value') as HTMLInputElement
    const inputValue = Number(input.value)

    await userEvent.click(upButton)

    const updatedValue = Number(input.value)
    expect(updatedValue).toBe(inputValue + 1)
  })
  it('Counter의 DOWN 버튼이 동작하는지 확인', async () => {
    render(<TestComponent />)

    const downButton = screen.getByLabelText('Decrease counter')
    const input = screen.getByLabelText('Counter value') as HTMLInputElement
    const inputValue = Number(input.value)

    await userEvent.click(downButton)

    const updatedValue = Number(input.value)
    expect(updatedValue).toBe(inputValue - 1)
  })

  it('최솟값을 제한하는 minimal Props가 동작하는지 확인', async () => {
    render(<TestComponent minimum={4} />)

    const downButton = screen.getByLabelText('Decrease counter')
    const input = screen.getByLabelText('Counter value') as HTMLInputElement
    const inputValue = Number(input.value)

    await userEvent.click(downButton)

    const updatedValue = Number(input.value)
    expect(updatedValue).toBe(inputValue)
  })

  it('최댓값을 제한하는 maximum Props가 동작하는지 확인', async () => {
    render(<TestComponent maximum={4} />)

    const upButton = screen.getByLabelText('Increase counter')
    const input = screen.getByLabelText('Counter value') as HTMLInputElement
    const inputValue = Number(input.value)

    await userEvent.click(upButton)

    const updatedValue = Number(input.value)
    expect(updatedValue).toBe(inputValue)
  })
})
