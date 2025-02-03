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
    { id: 3, value: 'banana', label: '🍌 Banana' },
    { id: 4, value: 'carrot', label: '🥕 Carrot' },
  ]

  return (
    <Radio
      defaultValue={value}
      onChange={onChange}
      className="flex flex-col gap-2"
    >
      {radioList.map((item) => (
        <Radio.Item key={item.id} value={item.value}>
          <p className={`${value === item.value && 'text-blue-400'}`}>
            {item.label}
          </p>
        </Radio.Item>
      ))}
    </Radio>
  )
}
