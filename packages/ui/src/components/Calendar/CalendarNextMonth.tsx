import React, { PropsWithChildren } from 'react'
import { useActionsContext } from './CalendarMain'

interface CalendarNextMonthProps {
  className?: string
}

export default function CalendarNextMonth({
  children,
  className,
}: PropsWithChildren<CalendarNextMonthProps>) {
  const { onNextMonthClick } = useActionsContext()

  return (
    <button onClick={onNextMonthClick} className={className}>
      {children}
    </button>
  )
}
