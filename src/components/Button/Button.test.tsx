import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('기본 버튼 컴포넌트가 렌더링되는지 확인', () => {
    render(
      <Button
        type="button"
        className="h-[50px] w-[320px] rounded-md bg-black text-base font-bold text-white transition-all duration-200 hover:opacity-80"
      >
        <Button.Label>BUTTON</Button.Label>
      </Button>,
    )
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
