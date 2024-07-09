import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('버튼 컴포넌트가 렌더링되는지 확인', () => {
    render(<Button type="button" data-testid="test-normal" />)
    const button = screen.getByTestId('test-normal')

    expect(button).toBeInTheDocument()
  })
  it('버튼 컴포넌트의 disabled Props 동작 테스트 ', () => {
    render(<Button type="button" disabled={true} data-testid="test-disabled" />)
    const button = screen.getByTestId('test-disabled')

    expect(button).toBeDisabled()
  })
})
