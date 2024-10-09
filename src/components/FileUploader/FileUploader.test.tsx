import { render, screen } from '@testing-library/react'
import { Normal } from './FileUploader.stories'

describe('FileUploader', () => {
  it('FileUploader 컴포넌트가 렌더링되는지 확인', () => {
    render(<Normal />)

    expect(
      screen.getByText(/등록할 이미지를 선택하거나 올려주세요./i),
    ).toBeInTheDocument()
  })
})
