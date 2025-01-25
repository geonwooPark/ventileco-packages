import { PropsWithChildren } from 'react'
import { useCalendarContext } from './CalendarMain'

interface CalendarPrevMonthProps {
  className?: string
}

export default function CalendarPrevMonth({
  children,
  className,
}: PropsWithChildren<CalendarPrevMonthProps>) {
  const { onPrevMonthClick } = useCalendarContext()

  return (
    <button onClick={onPrevMonthClick} className={className}>
      {children}
    </button>
  )
}
