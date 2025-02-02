import React, { PropsWithChildren } from 'react'
import { useActionsContext } from './CalendarMain'

interface CalendarPrevMonthProps {
  className?: string
}

export default function CalendarPrevMonth({
  children,
  className,
}: PropsWithChildren<CalendarPrevMonthProps>) {
  const { onPrevMonthClick } = useActionsContext()

  return (
    <button onClick={onPrevMonthClick} className={className}>
      {children}
    </button>
  )
}
