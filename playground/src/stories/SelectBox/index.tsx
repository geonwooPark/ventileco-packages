import React, { useState } from 'react'
import { SelectBox as VSelectBox } from 'ventileco-ui'
import { motion } from 'motion/react'

export default function SelectBox() {
  const [value, setValue] = useState<string>('')

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

  const animationProps = {
    variants: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    initial: 'hidden',
    animate: 'visible',
    viewport: { once: true },
    transition: { duration: 0.3 },
  }

  return (
    <VSelectBox
      value={value}
      onChange={setValue}
      list={selectBoxList}
      className="w-[240px] text-sm"
    >
      <VSelectBox.Input
        placeholder="🐝 Fruits"
        className="flex h-12 w-full items-center rounded-md border border-black px-3 focus-within:border-2"
      />

      <VSelectBox.List
        as={motion.ul}
        {...animationProps}
        className='bg-white" absolute z-[200] max-h-[240px] w-full overflow-hidden overflow-y-scroll rounded-md border'
      >
        {({ optionList }) => (
          <>
            {optionList.map((item) => (
              <VSelectBox.Item key={item.value} item={item}>
                {({ isSelected, isDisabled, isFocused }) => (
                  <div
                    className={`${isSelected && 'text-blue-600'} ${isDisabled && 'text-gray-300'} ${isFocused && 'bg-blue-100'} w-full px-3 py-2 hover:bg-gray-100`}
                  >
                    {item.label}
                  </div>
                )}
              </VSelectBox.Item>
            ))}
          </>
        )}
      </VSelectBox.List>
    </VSelectBox>
  )
}
