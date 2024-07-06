import { render, screen } from '@testing-library/react'
import Box from './Box'

describe('Box', () => {
  it('Box 컴포넌트가 button 태그로 렌더링되는지 확인', () => {
    render(<Box as="button" />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
  it('Box 컴포넌트가 a태그로 렌더링되는지 확인', () => {
    render(
      <Box
        as="a"
        target="_blank"
        href="https://github.com/geonwooPark/ventileco-ui"
        className="inline-block rounded-md bg-black px-10 py-4 text-base font-bold text-white transition-all duration-200 hover:opacity-80"
      >
        Link
      </Box>,
    )
    expect(screen.getByRole('link')).toBeInTheDocument()
  })
})
