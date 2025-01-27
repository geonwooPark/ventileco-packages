import React, { PropsWithChildren } from 'react'
import { useCalendarContext } from './CalendarMain'

interface CalendarNextMonthProps {
  className?: string
}

export default function CalendarNextMonth({
  children,
  className,
}: PropsWithChildren<CalendarNextMonthProps>) {
  const { onNextMonthClick } = useCalendarContext()

  return (
    <button onClick={onNextMonthClick} className={className}>
      {children}
    </button>
  )
}
