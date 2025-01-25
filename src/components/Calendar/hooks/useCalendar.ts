import { useCallback, useMemo, useState } from 'react'
import { formatDate, parseDate } from '../utils'

export const useCalendar = (monthFormat: string) => {
  const today = new Date()

  const [selectedMonth, setSelectedMonth] = useState<string>(
    formatDate(today, monthFormat),
  )

  const parsedMonth = useMemo(
    () => parseDate(selectedMonth, monthFormat),
    [selectedMonth, monthFormat],
  )

  const days = useMemo(() => {
    const startOfMonth = new Date(
      parsedMonth.getFullYear(),
      parsedMonth.getMonth(),
      1,
    )

    const endOfMonth = new Date(
      parsedMonth.getFullYear(),
      parsedMonth.getMonth() + 1,
      0,
    )

    const startOfFirstWeek = new Date(startOfMonth)
    startOfFirstWeek.setDate(startOfMonth.getDate() - startOfMonth.getDay())

    const endOfLastWeek = new Date(endOfMonth)
    endOfLastWeek.setDate(endOfMonth.getDate() + (6 - endOfMonth.getDay()))

    const daysArray: Date[] = []
    for (
      let date = new Date(startOfFirstWeek);
      date <= endOfLastWeek;
      date.setDate(date.getDate() + 1)
    ) {
      daysArray.push(new Date(date))
    }
    return daysArray
  }, [parsedMonth])

  const onPrevMonthClick = useCallback(() => {
    setSelectedMonth((prev) => {
      const date = parseDate(prev, monthFormat)
      date.setMonth(date.getMonth() - 1)
      return formatDate(date, monthFormat)
    })
  }, [monthFormat])

  const onNextMonthClick = useCallback(() => {
    setSelectedMonth((prev) => {
      const date = parseDate(prev, monthFormat)
      date.setMonth(date.getMonth() + 1)
      return formatDate(date, monthFormat)
    })
  }, [monthFormat])

  const onPrevYearClick = useCallback(() => {
    setSelectedMonth((prev) => {
      const date = parseDate(prev, monthFormat)
      date.setFullYear(date.getFullYear() - 1)
      return formatDate(date, monthFormat)
    })
  }, [monthFormat])

  const onNextYearClick = useCallback(() => {
    setSelectedMonth((prev) => {
      const date = parseDate(prev, monthFormat)
      date.setFullYear(date.getFullYear() + 1)
      return formatDate(date, monthFormat)
    })
  }, [monthFormat])

  return {
    selectedMonth,
    days,
    onPrevMonthClick,
    onNextMonthClick,
    onPrevYearClick,
    onNextYearClick,
  }
}
