import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Normal } from './Input.stories'

describe('Input', () => {
  it('Normal 인풋 컴포넌트가 렌더링되는지 확인', () => {
    render(<Normal />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('Normal 인풋 컴포넌트에 타이핑 하는 케이스', async () => {
    render(<Normal />)

    const input = screen.getByRole('textbox') as HTMLInputElement
    await userEvent.type(input, 'asd')

    await waitFor(() => {
      expect(input.value).toBe('asd')
    })
  })
})
