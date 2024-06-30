import { render, screen } from '@testing-library/react'
import Counter from './CounterMain'

describe('Counter', () => {
  it('Counter 컴포넌트가 렌더링되는지 확인', () => {
    render(
      <Counter maximum={10} minimum={-5}>
        <div className="flex items-center gap-2">
          <Counter.Down>
            <div className="border rounded border-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path strokeLinecap="round" strokeWidth="round" d="M5 12h14" />
              </svg>
            </div>
          </Counter.Down>
          <Counter.Number className="border border-black rounded px-4 py-2 w-[100px]" />
          <Counter.Up>
            <div className="border rounded border-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </Counter.Up>
        </div>
      </Counter>,
    )
    expect(screen.getByRole('group')).toBeInTheDocument()
  })
})
