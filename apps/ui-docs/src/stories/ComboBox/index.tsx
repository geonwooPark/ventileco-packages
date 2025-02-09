import React, { useState } from 'react'
import { ComboBox as VComboBox } from 'ventileco-ui'
import { motion } from 'motion/react'

export default function ComboBox() {
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
    <VComboBox
      value={value}
      onChange={setValue}
      list={comboBoxList}
      className="w-[240px] text-sm"
    >
      <VComboBox.Input
        placeholder="🐝 Fruits"
        className="flex h-12 w-full items-center rounded-md border border-black px-3 focus-within:border-2"
        clearIcon={
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
        }
      />

      <VComboBox.List
        as={motion.ul}
        {...animationProps}
        className="absolute z-[200] max-h-[240px] w-full overflow-hidden overflow-y-scroll rounded-md border bg-white"
      >
        {({ optionList }) =>
          optionList.length !== 0 ? (
            <>
              {optionList.map((item) => (
                <VComboBox.Item key={item.value} item={item}>
                  {({ isSelected, isDisabled, isFocused }) => (
                    <div
                      className={`${isSelected && 'text-blue-600'} ${isDisabled && 'text-gray-300'} ${isFocused && 'bg-gray-50'} w-full px-3 py-2 hover:bg-gray-100`}
                    >
                      {item.label}
                    </div>
                  )}
                </VComboBox.Item>
              ))}
            </>
          ) : (
            <div className="w-full rounded-md bg-white px-3 py-2 text-black/50">
              No Results
            </div>
          )
        }
      </VComboBox.List>
    </VComboBox>
  )
}
