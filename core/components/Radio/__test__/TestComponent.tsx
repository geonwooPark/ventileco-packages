import React, { useState } from 'react'
import Radio from '../RadioMain'

export default function TestComponent() {
  const [value, setValue] = useState<string>()

  const onChange = (value: string) => {
    setValue(value)
  }

  const radioList = [
    { id: 0, value: 'apple', label: '🍎 Apple' },
    { id: 1, value: 'kiwi', label: '🥝 Kiwi' },
    { id: 2, value: 'peach', label: '🍑 Peach' },
  ]

  return (
    <Radio value={value} onChange={onChange}>
      <Radio.List className="flex flex-col gap-2">
        {radioList.map((item) => (
          <Radio.Item key={item.id} value={item.value}>
            {({ isSelected }) => <p>{item.label}</p>}
          </Radio.Item>
        ))}
      </Radio.List>
    </Radio>
  )
}
