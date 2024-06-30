import { render, screen } from '@testing-library/react'
import Box from './Box'
import { Normal } from './Box.stories'

describe('Box', () => {
  it('Box 컴포넌트가 button 태그로 렌더링되는지 확인', () => {
    render(<Box as="button" />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
  it('Box 컴포넌트가 a태그로 렌더링되는지 확인', () => {
    render(<Normal />)
    expect(screen.getByRole('link')).toBeInTheDocument()
  })
})
