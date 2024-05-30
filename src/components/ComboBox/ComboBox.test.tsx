import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ComboBox from './ComboBox'
import { list } from '../../constants/list'

describe('ComboBox', () => {
  it('ComboBox 컴포넌트가 렌더링되는지 확인', () => {
    render(
      <ComboBox value={undefined} setValue={() => {}} list={list}>
        <ComboBox.Label>ComboBox</ComboBox.Label>
        <ComboBox.Trigger>
          <button className="flex w-full items-center rounded-md border px-3 py-2">
            <ComboBox.Input placeholder="Fruits" />
          </button>
        </ComboBox.Trigger>

        <ComboBox.List>
          {({ optionList }) =>
            optionList.map((item, idx) => (
              <ComboBox.Item key={item.value} idx={idx} item={item}>
                <button className={`w-full px-3 py-2`}>{item.label}</button>
              </ComboBox.Item>
            ))
          }
        </ComboBox.List>
      </ComboBox>,
    )
    expect(screen.getByText('ComboBox')).toBeInTheDocument()
  })

  it('트리거를 클릭하여 리스트박스가 보이는지 확인', async () => {
    render(
      <ComboBox value={undefined} setValue={() => {}} list={list}>
        <ComboBox.Label>ComboBox</ComboBox.Label>
        <ComboBox.Trigger>
          <button className="flex w-full items-center rounded-md border px-3 py-2">
            <ComboBox.Input placeholder="Fruits" />
          </button>
        </ComboBox.Trigger>

        <ComboBox.List>
          {({ optionList }) =>
            optionList.map((item, idx) => (
              <ComboBox.Item key={item.value} idx={idx} item={item}>
                <button className={`w-full px-3 py-2`}>{item.label}</button>
              </ComboBox.Item>
            ))
          }
        </ComboBox.List>
      </ComboBox>,
    )
    await userEvent.click(screen.getByRole('combobox'))
    expect(screen.getByRole('list')).toBeInTheDocument()
  })

  it('마우스를 사용하여 옵션을 선택하는 케이스', async () => {
    render(
      <ComboBox value={undefined} setValue={() => {}} list={list}>
        <ComboBox.Label>ComboBox</ComboBox.Label>
        <ComboBox.Trigger>
          <button className="flex w-full items-center rounded-md border px-3 py-2">
            <ComboBox.Input placeholder="Fruits" />
          </button>
        </ComboBox.Trigger>

        <ComboBox.List>
          {({ optionList }) =>
            optionList.map((item, idx) => (
              <ComboBox.Item key={item.value} idx={idx} item={item}>
                <button className={`w-full px-3 py-2`}>{item.label}</button>
              </ComboBox.Item>
            ))
          }
        </ComboBox.List>
      </ComboBox>,
    )

    const input = screen.getByRole('input') as HTMLInputElement
    await userEvent.click(screen.getByRole('combobox'))
    await userEvent.click(screen.getByText('Kiwi'))

    await waitFor(() => {
      expect(input.value).toBe('Kiwi')
    })
  })

  it('키보드를 사용하여 옵션을 선택하는 케이스', async () => {
    render(
      <ComboBox value={undefined} setValue={() => {}} list={list}>
        <ComboBox.Label>ComboBox</ComboBox.Label>
        <ComboBox.Trigger>
          <button className="flex w-full items-center rounded-md border px-3 py-2">
            <ComboBox.Input placeholder="Fruits" />
          </button>
        </ComboBox.Trigger>

        <ComboBox.List>
          {({ optionList }) =>
            optionList.map((item, idx) => (
              <ComboBox.Item key={item.value} idx={idx} item={item}>
                <button className={`w-full px-3 py-2`}>{item.label}</button>
              </ComboBox.Item>
            ))
          }
        </ComboBox.List>
      </ComboBox>,
    )

    const input = screen.getByRole('input') as HTMLInputElement
    await userEvent.click(input)
    await userEvent.keyboard('[ArrowDown]')
    await userEvent.keyboard('[Enter]')

    await waitFor(() => {
      expect(input.value).toBe('Kiwi')
    })
  })

  it('콤보박스를 사용하여 키워드를 검색하는 케이스', async () => {
    render(
      <ComboBox value={undefined} setValue={() => {}} list={list}>
        <ComboBox.Label>ComboBox</ComboBox.Label>
        <ComboBox.Trigger>
          <button className="flex w-full items-center rounded-md border px-3 py-2">
            <ComboBox.Input placeholder="Fruits" />
          </button>
        </ComboBox.Trigger>

        <ComboBox.List>
          {({ optionList }) =>
            optionList.map((item, idx) => (
              <ComboBox.Item key={item.value} idx={idx} item={item}>
                <button className={`w-full px-3 py-2`}>{item.label}</button>
              </ComboBox.Item>
            ))
          }
        </ComboBox.List>
      </ComboBox>,
    )
    const input = screen.getByRole('input') as HTMLInputElement
    await userEvent.type(input, 'ki')

    expect(screen.getByText('Kiwi')).toBeInTheDocument()
    expect(screen.getByText('Kiwi2')).toBeInTheDocument()
    expect(screen.getByText('Kiwi3')).toBeInTheDocument()
  })
})
