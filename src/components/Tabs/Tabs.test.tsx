import { render, screen } from '@testing-library/react'
import { Normal } from './Tabs.stories'

describe('Tabs', () => {
  it('기본 탭 컴포넌트가 렌더링되는지 확인', () => {
    render(<Normal />)
    expect(screen.getByRole('tablist')).toBeInTheDocument()
  })
})
