import React, { useState } from 'react'
import { CheckBox as VCheckBox } from 'ventileco-ui'

export default function CheckBox() {
  const [values, setValues] = useState<string[]>([])

  const onChange = (newValues: string[]) => {
    setValues(newValues)
  }

  const checkBoxList = [
    { id: 0, value: 'carrot1', label: '🥕 Carrot' },
    { id: 1, value: 'carrot2', label: '🥕 Two Carrot' },
    { id: 2, value: 'carrot3', label: '🥕 Three Carrot' },
  ]

  return (
    <VCheckBox
      values={values}
      onChange={onChange}
      className="border rounded-md"
    >
      {checkBoxList.map((item) => (
        <VCheckBox.Item key={item.id} value={item.value}>
          {({ checked }) => (
            <div className={`px-4 py-3 flex gap-2 items-center`}>
              <div className="relative size-4 rounded-sm border">
                <div
                  className={`absolute top-[50%] left-[50%] translate-y-[-70%] translate-x-[-50%] w-1.5 h-3.5 border-b-2 border-r-2 transform rotate-45 ${checked ? 'border-blue-600' : 'border-transparent'}`}
                />
              </div>
              {item.label}
            </div>
          )}
        </VCheckBox.Item>
      ))}
    </VCheckBox>
  )
}
