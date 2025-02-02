import React, { PropsWithChildren } from 'react'
import { useActionsContext } from './CalendarMain'

interface CalendarNextYearProps {
  className?: string
}

export default function CalendarNextYear({
  children,
  className,
}: PropsWithChildren<CalendarNextYearProps>) {
  const { onNextYearClick } = useActionsContext()

  return (
    <button onClick={onNextYearClick} className={className}>
      {children}
    </button>
  )
}
