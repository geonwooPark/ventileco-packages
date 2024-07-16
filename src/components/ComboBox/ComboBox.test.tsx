import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Normal } from './ComboBox.stories'

describe('ComboBox', () => {
  it('ComboBox 컴포넌트가 렌더링되는지 확인', () => {
    render(<Normal />)

    expect(screen.getByPlaceholderText('🐝 Fruits')).toBeInTheDocument()
  })

  it('트리거를 클릭하여 리스트박스가 보이는지 확인', async () => {
    render(<Normal />)

    const combobox = screen.getByRole('combobox')

    await userEvent.click(combobox)
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('마우스를 사용하여 옵션을 선택하는 케이스', async () => {
    render(<Normal />)

    const combobox = screen.getByRole('combobox') as HTMLInputElement
    await userEvent.click(combobox)
    await userEvent.click(screen.getByText('🥝 Kiwi'))

    await waitFor(() => {
      expect(combobox.value).toBe('🥝 Kiwi')
    })
  })

  it('키보드를 사용하여 옵션을 선택하는 케이스', async () => {
    render(<Normal />)

    const combobox = screen.getByRole('combobox') as HTMLInputElement
    await userEvent.click(combobox)
    await userEvent.keyboard('[ArrowDown][Enter]')

    await waitFor(() => {
      expect(combobox.value).toBe('🍇 Grape')
    })
  })

  it('콤보박스를 사용하여 키워드를 검색하는 케이스', async () => {
    render(<Normal />)

    const combobox = screen.getByRole('combobox') as HTMLInputElement
    await userEvent.type(combobox, 'ki')

    expect(screen.getByText('🥝 Kiwi')).toBeInTheDocument()
    expect(screen.getByText('🥝 Kiwi2')).toBeInTheDocument()
  })
})
