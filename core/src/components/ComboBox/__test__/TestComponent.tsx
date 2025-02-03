import React, { useState } from 'react'
import ComboBox from '../ComboBoxMain'

export default function TestComponent() {
  const [value, setValue] = useState<string>()

  const comboBoxList = [
    { value: 'apple', label: '🍎 Apple', disabled: true },
    { value: 'kiwi', label: '🥝 Kiwi' },
    { value: 'peach', label: '🍑 Peach', disabled: true },
    { value: 'grape', label: '🍇 Grape' },
    { value: 'cherry', label: '🍒 Cherry' },
    { value: 'apple2', label: '🍎 Apple2' },
    { value: 'banana2', label: '🥝 Kiwi2', disabled: true },
    { value: 'peach2', label: '🍑 Peach2', disabled: true },
    { value: 'grape2', label: '🍇 Grape2' },
    { value: 'cherry2', label: '🍒 Cherry2' },
  ]

  return (
    <ComboBox value={value} onChange={setValue} list={comboBoxList}>
      <ComboBox.Input placeholder="🐝 Fruits" />

      <ComboBox.List>
        {({ optionList }) =>
          optionList.length !== 0 ? (
            <>
              {optionList.map((item) => (
                <ComboBox.Item key={item.value} item={item}>
                  {({ isSelected, isDisabled, isFocused }) => (
                    <div>{item.label}</div>
                  )}
                </ComboBox.Item>
              ))}
            </>
          ) : (
            <div>No Results</div>
          )
        }
      </ComboBox.List>
    </ComboBox>
  )
}
