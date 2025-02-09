import React from 'react'
import { useSelectedMonthContext } from './CalendarMain'

interface CalendarSelectedMonthProps {
  className?: string
}

export default function CalendarSelectedMonth({
  className,
}: CalendarSelectedMonthProps) {
  const selectedMonth = useSelectedMonthContext()

  return <p className={className}>{selectedMonth}</p>
}
