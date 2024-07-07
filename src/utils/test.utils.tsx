import {
  cleanup,
  render,
  RenderOptions,
  RenderResult,
} from '@testing-library/react'
import { ReactElement } from 'react'

afterEach(() => {
  cleanup()
})

function customRender(ui: ReactElement, options?: RenderOptions): RenderResult {
  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options,
  })
}

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
// override render export
export { customRender as render }
