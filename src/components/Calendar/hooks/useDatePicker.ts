import { useState } from 'react'

export default function useDatePicker(initialDate?: Date) {
  const [date, setDate] = useState(initialDate || new Date())

  const onChange = (date: Date) => {
    setDate(date)
  }

  return { date, onChange }
}
