import { PropsWithChildren } from 'react'
import { useCalendarContext } from './CalendarMain'

interface CalendarPrevYearProps {
  className?: string
}

export default function CalendarPrevYear({
  children,
  className,
}: PropsWithChildren<CalendarPrevYearProps>) {
  const { onPrevYearClick } = useCalendarContext()

  return (
    <button onClick={onPrevYearClick} className={className}>
      {children}
    </button>
  )
}
