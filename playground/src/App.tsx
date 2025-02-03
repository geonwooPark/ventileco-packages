import React, { useState } from 'react'
import { CheckBox } from 'ventileco-ui'

export default function App() {
  const [values, setValues] = useState<string[]>([])

  const onChange = (newValues: string[]) => {
    setValues(newValues)
  }

  const checkBoxList = [
    { id: 0, value: 'carrot', label: '🥕 Carrot' },
    { id: 1, value: 'onion', label: '🧅 Onion' },
    { id: 2, value: 'tomato', label: '🍅 Tomato' },
  ]

  return (
    <CheckBox values={values} onChange={onChange}>
      {checkBoxList.map((item) => (
        <CheckBox.Item key={item.id} value={item.value}>
          {({ checked }) => (
            <div className={`${checked && 'text-red-400'}`}>{item.label}</div>
          )}
        </CheckBox.Item>
      ))}
    </CheckBox>
  )
}
