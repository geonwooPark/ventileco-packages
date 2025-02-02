import React, { PropsWithChildren } from 'react'
import { useActionsContext } from './CalendarMain'

interface CalendarPrevYearProps {
  className?: string
}

export default function CalendarPrevYear({
  children,
  className,
}: PropsWithChildren<CalendarPrevYearProps>) {
  const { onPrevYearClick } = useActionsContext()

  return (
    <button onClick={onPrevYearClick} className={className}>
      {children}
    </button>
  )
}
