import type { Meta } from '@storybook/react'
import ComboBox from './ComboBox'
import { useState } from 'react'
import { list } from '../../constants/list'

const meta: Meta<typeof ComboBox> = {
  title: 'COMPONENTS/ComboBox',
  component: ComboBox,
  parameters: {
    layout: 'centered',
  },
}

export default meta

export function Normal() {
  const [value, setValue] = useState<string>()

  return (
    <div className="w-[240px] text-sm">
      <ComboBox value={value} setValue={setValue} list={list}>
        <ComboBox.Trigger>
          <button className="flex w-full items-center rounded-md border px-3 py-2">
            <ComboBox.Input placeholder="Fruits" />
          </button>
        </ComboBox.Trigger>

        <ComboBox.List className="absolute z-[200] mt-1 max-h-[240px] w-full overflow-hidden overflow-y-scroll rounded-md border bg-white">
          {({ optionList }) =>
            optionList.map((item) => (
              <ComboBox.Item key={item.value} item={item}>
                {({ isSelected, isDisabled }) => (
                  <button
                    className={`${isSelected && 'text-blue-600'} ${isDisabled && 'text-gray-300'} w-full px-3 py-2 hover:bg-gray-100`}
                  >
                    {item.label}
                  </button>
                )}
              </ComboBox.Item>
            ))
          }
        </ComboBox.List>
      </ComboBox>
    </div>
  )
}

export function WithLabel() {
  const [value, setValue] = useState<string>()

  return (
    <div className="w-[240px] text-sm">
      <ComboBox value={value} setValue={setValue} list={list}>
        <ComboBox.Label>ComboBox</ComboBox.Label>
        <ComboBox.Trigger>
          <button className="flex w-full items-center rounded-md border px-3 py-2">
            <ComboBox.Input placeholder="Fruits" />
          </button>
        </ComboBox.Trigger>

        <ComboBox.List className="absolute z-[200] mt-1 max-h-[240px] w-full overflow-hidden overflow-y-scroll rounded-md border bg-white">
          {({ optionList }) =>
            optionList.map((item) => (
              <ComboBox.Item key={item.value} item={item}>
                {({ isSelected, isDisabled }) => (
                  <button
                    className={`${isSelected && 'text-blue-600'} ${isDisabled && 'text-gray-300'} w-full px-3 py-2 hover:bg-gray-100`}
                  >
                    {item.label}
                  </button>
                )}
              </ComboBox.Item>
            ))
          }
        </ComboBox.List>
      </ComboBox>
    </div>
  )
}

export function WithClearButton() {
  const [value, setValue] = useState<string>()

  return (
    <div className="w-[240px] text-sm">
      <ComboBox value={value} setValue={setValue} list={list}>
        <ComboBox.Label>ComboBox</ComboBox.Label>
        <ComboBox.Trigger>
          <button className="flex w-full items-center rounded-md border px-3 py-2">
            <ComboBox.Input placeholder="Fruits" />
            <ComboBox.ClearButton>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </ComboBox.ClearButton>
          </button>
        </ComboBox.Trigger>

        <ComboBox.List className="absolute z-[200] mt-1 max-h-[240px] w-full overflow-hidden overflow-y-scroll rounded-md border bg-white">
          {({ optionList }) =>
            optionList.map((item) => (
              <ComboBox.Item key={item.value} item={item}>
                {({ isSelected, isDisabled }) => (
                  <button
                    className={`${isSelected && 'text-blue-600'} ${isDisabled && 'text-gray-300'} w-full px-3 py-2 hover:bg-gray-100`}
                  >
                    {item.label}
                  </button>
                )}
              </ComboBox.Item>
            ))
          }
        </ComboBox.List>
      </ComboBox>
    </div>
  )
}

export function WithArrowButton() {
  const [value, setValue] = useState<string>()

  return (
    <div className="w-[240px] text-sm">
      <ComboBox value={value} setValue={setValue} list={list}>
        <ComboBox.Label>ComboBox</ComboBox.Label>
        <ComboBox.Trigger>
          <button className="flex w-full items-center rounded-md border px-3 py-2">
            <ComboBox.Input placeholder="Fruits" />
            <div className="flex gap-2">
              <ComboBox.ClearButton>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </ComboBox.ClearButton>
              <ComboBox.ArrowButton>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </ComboBox.ArrowButton>
            </div>
          </button>
        </ComboBox.Trigger>

        <ComboBox.List className="absolute z-[200] mt-1 max-h-[240px] w-full overflow-hidden overflow-y-scroll rounded-md border bg-white">
          {({ optionList }) =>
            optionList.map((item) => (
              <ComboBox.Item key={item.value} item={item}>
                {({ isSelected, isDisabled }) => (
                  <button
                    className={`${isSelected && 'text-blue-600'} ${isDisabled && 'text-gray-300'} w-full px-3 py-2 hover:bg-gray-100`}
                  >
                    {item.label}
                  </button>
                )}
              </ComboBox.Item>
            ))
          }
        </ComboBox.List>
      </ComboBox>
    </div>
  )
}
