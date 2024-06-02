import { render, screen } from '@testing-library/react'
import { Normal } from './Accordion.stories'

describe('Accordion', () => {
  it('Accordion 컴포넌트가 렌더링되는지 확인', () => {
    render(<Normal />)
    expect(screen.getByRole('tablist')).toBeInTheDocument()
  })
})
