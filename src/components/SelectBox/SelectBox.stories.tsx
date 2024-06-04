import type { Meta } from '@storybook/react'
import { useState } from 'react'
import { list } from '../../constants/list'
import SelectBox from './SelectBox'

const meta: Meta<typeof SelectBox> = {
  title: 'COMPONENTS/SelectBox',
  component: SelectBox,
  parameters: {
    layout: 'centered',
  },
}

export default meta

export function Normal() {
  const [value, setValue] = useState<string>()

  return (
    <div className="w-[240px] text-sm">
      <SelectBox value={value} setValue={setValue} list={list}>
        <SelectBox.Trigger>
          <button className="flex w-full items-center justify-between rounded-md border px-3 py-2">
            <SelectBox.TriggerText>메뉴를 선택하세요</SelectBox.TriggerText>
          </button>
        </SelectBox.Trigger>

        <SelectBox.List className="absolute z-[200] mt-1 max-h-[240px] w-full overflow-hidden overflow-y-scroll rounded-md border bg-white">
          {({ optionList }) =>
            optionList.map((item) => (
              <SelectBox.Item key={item.value} item={item}>
                {({ isSelected, isDisabled }) => (
                  <button
                    className={`${isSelected && 'text-blue-600'} ${isDisabled && 'text-gray-300'} w-full px-3 py-2 hover:bg-gray-100`}
                  >
                    {item.label}
                  </button>
                )}
              </SelectBox.Item>
            ))
          }
        </SelectBox.List>
      </SelectBox>
    </div>
  )
}

export function WithLabel() {
  const [value, setValue] = useState<string>()

  return (
    <div className="w-[240px] text-sm">
      <SelectBox value={value} setValue={setValue} list={list}>
        <SelectBox.Label>레이블</SelectBox.Label>
        <SelectBox.Trigger>
          <button className="flex w-full items-center justify-between rounded-md border px-3 py-2">
            <SelectBox.TriggerText>메뉴를 선택하세요</SelectBox.TriggerText>
          </button>
        </SelectBox.Trigger>

        <SelectBox.List className="absolute z-[200] mt-1 max-h-[240px] w-full overflow-hidden overflow-y-scroll rounded-md border bg-white">
          {({ optionList }) =>
            optionList.map((item) => (
              <SelectBox.Item key={item.value} item={item}>
                {({ isSelected, isDisabled }) => (
                  <button
                    className={`${isSelected && 'text-blue-600'} ${isDisabled && 'text-gray-300'} w-full px-3 py-2 hover:bg-gray-100`}
                  >
                    {item.label}
                  </button>
                )}
              </SelectBox.Item>
            ))
          }
        </SelectBox.List>
      </SelectBox>
    </div>
  )
}
