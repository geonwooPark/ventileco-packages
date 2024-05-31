import { render, screen } from '@testing-library/react'
import { Normal } from './Button.stories'

describe('Button', () => {
  it('Normal 버튼 컴포넌트가 렌더링되는지 확인', () => {
    render(<Normal />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
