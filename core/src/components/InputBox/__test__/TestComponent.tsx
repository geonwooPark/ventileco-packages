import React, { useState } from 'react'
import InputBox from '../InputBox'

export default function TestComponent() {
  const [value, setValue] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setValue(value)
  }

  return (
    <InputBox
      value={value}
      onChange={onChange}
      placeholder="내용을 입력하세요."
    />
  )
}
