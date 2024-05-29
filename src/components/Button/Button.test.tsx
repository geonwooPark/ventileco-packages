import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Select', () => {
  it('Select 컴포넌트가 렌더링되는지 확인', () => {
    render(<Button primary={true} label="Button" />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
