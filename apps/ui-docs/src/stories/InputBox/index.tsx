import React, { useState } from 'react'
import { InputBox as VInputBox } from 'ventileco-ui'

export default function InputBox() {
  const [value, setValue] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setValue(value)
  }

  return (
    <VInputBox
      value={value}
      onChange={onChange}
      placeholder="내용을 입력하세요."
      className="h-12 w-[360px] rounded-md border border-black px-3 focus-within:border-2"
      inputClassName="placeholder:text-gray-300 placeholder:text-sm"
      startIcon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="mr-2 size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      }
    />
  )
}
