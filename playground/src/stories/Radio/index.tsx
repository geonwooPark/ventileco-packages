import React, { useState } from 'react'
import { Radio as VRadio } from 'ventileco-ui'

export default function Radio() {
  const [value, setValue] = useState<string>('')

  const onChange = (value: string) => {
    setValue(value)
  }

  const radioList = [
    { id: 0, value: 'apple', label: '🍎 Apple' },
    { id: 1, value: 'kiwi', label: '🥝 Kiwi' },
    { id: 2, value: 'peach', label: '🍑 Peach' },
  ]

  return (
    <VRadio
      defaultValue={value}
      onChange={onChange}
      className="w-[240px] flex flex-col gap-2"
    >
      {radioList.map((item) => (
        <VRadio.Item key={item.id} value={item.value}>
          <div className="flex w-full cursor-pointer gap-2 rounded-md border px-4 py-3">
            <div className="size-5 rounded-full border flex justify-center items-center">
              {value === item.value && (
                <div className="size-3 rounded-full border bg-blue-600" />
              )}
            </div>
            <p>{item.label}</p>
          </div>
        </VRadio.Item>
      ))}
    </VRadio>
  )
}
