import React, { PropsWithChildren } from 'react'
import { useCalendarContext } from './CalendarMain'

interface CalendarNextYearProps {
  className?: string
}

export default function CalendarNextYear({
  children,
  className,
}: PropsWithChildren<CalendarNextYearProps>) {
  const { onNextYearClick } = useCalendarContext()

  return (
    <button onClick={onNextYearClick} className={className}>
      {children}
    </button>
  )
}
