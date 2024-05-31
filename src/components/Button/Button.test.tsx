import { render, screen } from '@testing-library/react'
import { Normal } from './Button.stories'

describe('Button', () => {
  it('Normal 버튼 컴포넌트가 렌더링되는지 확인', () => {
    render(
      <Normal
        type="button"
        className="h-[50px] w-[320px] rounded-md bg-black text-base font-bold text-white transition-all duration-200 hover:opacity-80"
      />,
    )
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
