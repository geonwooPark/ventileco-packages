import React, { useState } from 'react'
import SelectBox from '../SelectBoxMain'

export default function TestComponent() {
  const [value, setValue] = useState<string>()

  const selectBoxList = [
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
    <SelectBox value={value} onChange={setValue} list={selectBoxList}>
      <SelectBox.Input placeholder="🐝 Fruits" />

      <SelectBox.List>
        {({ optionList }) => (
          <>
            {optionList.map((item) => (
              <SelectBox.Item key={item.value} item={item}>
                {({ isSelected, isDisabled, isFocused }) => (
                  <div>{item.label}</div>
                )}
              </SelectBox.Item>
            ))}
          </>
        )}
      </SelectBox.List>
    </SelectBox>
  )
}
