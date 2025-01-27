import { useRef, useState } from 'react'

export default function useDateRange(initialDate?: Date[]) {
  const isFirst = useRef(true)

  const [dateRange, setDateRange] = useState(
    initialDate || [new Date(), new Date()],
  )

  const onRangeChange = (date: Date) => {
    if (isFirst.current) {
      // 첫 번째 요소 변경
      setDateRange((prev) => [date, prev[1]])
    } else {
      // 두 번째 요소 변경
      setDateRange((prev) => [prev[0], date])
    }

    isFirst.current = !isFirst.current
  }

  return { dateRange, onRangeChange, isFirst: isFirst.current }
}
