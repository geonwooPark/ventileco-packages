import { render, screen } from '@testing-library/react'
import { Normal } from './Counter.stories'
import userEvent from '@testing-library/user-event'

describe('Counter', () => {
  it('Counter 컴포넌트가 렌더링되는지 확인', () => {
    render(<Normal />)
    expect(screen.getByRole('group')).toBeInTheDocument()
  })

  it('Counter의 UP 버튼이 동작하는지 확인', async () => {
    render(<Normal />)

    const upButton = screen.getByLabelText('Increase counter')
    const input = screen.getByLabelText('Counter value') as HTMLInputElement
    const inputValue = Number(input.value)

    await userEvent.click(upButton)

    const updatedValue = Number(input.value)
    expect(updatedValue).toBe(inputValue + 1)
  })
  it('Counter의 DOWN 버튼이 동작하는지 확인', async () => {
    render(<Normal />)

    const downButton = screen.getByLabelText('Decrease counter')
    const input = screen.getByLabelText('Counter value') as HTMLInputElement
    const inputValue = Number(input.value)

    await userEvent.click(downButton)

    const updatedValue = Number(input.value)
    expect(updatedValue).toBe(inputValue - 1)
  })

  it('최솟값을 제한하는 minimal Props가 동작하는지 확인', async () => {
    render(<Normal minimum={3} />)

    const downButton = screen.getByLabelText('Decrease counter')
    const input = screen.getByLabelText('Counter value') as HTMLInputElement
    const inputValue = Number(input.value)

    await userEvent.click(downButton)

    const updatedValue = Number(input.value)
    expect(updatedValue).toBe(inputValue)
  })

  it('최댓값을 제한하는 maximum Props가 동작하는지 확인', async () => {
    render(<Normal maximum={3} />)

    const upButton = screen.getByLabelText('Increase counter')
    const input = screen.getByLabelText('Counter value') as HTMLInputElement
    const inputValue = Number(input.value)

    await userEvent.click(upButton)

    const updatedValue = Number(input.value)
    expect(updatedValue).toBe(inputValue)
  })
})
