import React, { useState } from 'react'
import CheckBox from '../CheckBoxMain'

export default function TestComponent() {
  const [values, setValues] = useState<string[]>([])

  const checkBoxList = [
    { id: 0, value: 'carrot', label: '🥕 Carrot' },
    { id: 1, value: 'onion', label: '🧅 Onion' },
    { id: 2, value: 'tomato', label: '🍅 Tomato' },
  ]

  return (
    <CheckBox value={values} onChange={(value) => setValues(value)}>
      <CheckBox.List>
        {checkBoxList.map((item) => (
          <CheckBox.Item key={item.id} value={item.value}>
            {({ isSelected }) => <div>{item.label}</div>}
          </CheckBox.Item>
        ))}
      </CheckBox.List>
    </CheckBox>
  )
}
