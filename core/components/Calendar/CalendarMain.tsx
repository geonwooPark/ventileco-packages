import React, { PropsWithChildren, forwardRef, useMemo } from 'react'
import { _createContext } from '../../utils/_createContext'
import { useCalendar } from './hooks/useCalendar'
import CalendarDate from './CalendarDate'
import CalendarDayOfTheWeek from './CalendarDayOfTheWeek'
import CalendarNextMonth from './CalendarNextMonth'
import CalendarNextYear from './CalendarNextYear'
import CalendarPrevMonth from './CalendarPrevMonth'
import CalendarPrevYear from './CalendarPrevYear'
import CalendarSelectedMonth from './CalendarSelectedMonth'

type ActionsState = {
  onPrevMonthClick: () => void
  onNextMonthClick: () => void
  onPrevYearClick: () => void
  onNextYearClick: () => void
}

export const [useActionsContext, ActionsProvider] =
  _createContext<ActionsState>()
export const [useSelectedMonthContext, SelectedMonthProvider] =
  _createContext<string>()
export const [useParsedMonthContext, ParsedMonthProvider] =
  _createContext<Date>()
export const [useDaysContext, DaysProvider] = _createContext<Date[]>()

interface CalendarMainProps {
  monthFormat?: string
  className?: string
}

const CalendarMain = forwardRef<
  HTMLDivElement,
  PropsWithChildren<CalendarMainProps>
>(function CalendarMain({ children, monthFormat = 'YYYY-MM', className }, ref) {
  const {
    selectedMonth,
    parsedMonth,
    days,
    onPrevMonthClick,
    onNextMonthClick,
    onPrevYearClick,
    onNextYearClick,
  } = useCalendar(monthFormat)

  const actions = useMemo(
    () => ({
      onPrevMonthClick,
      onNextMonthClick,
      onPrevYearClick,
      onNextYearClick,
    }),
    [onPrevMonthClick, onNextMonthClick, onPrevYearClick, onNextYearClick],
  )

  return (
    <ActionsProvider value={actions}>
      <SelectedMonthProvider value={selectedMonth}>
        <ParsedMonthProvider value={parsedMonth}>
          <DaysProvider value={days}>
            <div ref={ref} className={className}>
              {children}
            </div>
          </DaysProvider>
        </ParsedMonthProvider>
      </SelectedMonthProvider>
    </ActionsProvider>
  )
})

const Calendar = Object.assign(CalendarMain, {
  Date: CalendarDate,
  DayOfTheWeek: CalendarDayOfTheWeek,
  NextMonth: CalendarNextMonth,
  NextYear: CalendarNextYear,
  PrevMonth: CalendarPrevMonth,
  PrevYear: CalendarPrevYear,
  SelectedMonth: CalendarSelectedMonth,
})

export default Calendar
