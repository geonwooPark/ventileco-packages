// 날짜 객체를 특정 포맷으로 변환하는 함수
export const formatDate = (
  date: Date,
  format: string = 'YYYY-MM-DD',
): string => {
  const padZero = (num: number) => String(num).padStart(2, '0') // 2자리로 맞춤

  const getDayName = (day: number, isShort: boolean = false) => {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]
    return isShort ? days[day].slice(0, 3) : days[day]
  }

  const map: { [key: string]: string } = {
    YYYY: date.getFullYear().toString(),
    YY: date.getFullYear().toString().slice(-2), // 마지막 두 자리만
    MM: padZero(date.getMonth() + 1), // 월은 1부터 시작
    M: (date.getMonth() + 1).toString(), // 월 (숫자, 1~12)
    DD: padZero(date.getDate()),
    D: date.getDate().toString(), // 날짜 (1~31)
    hh: padZero(date.getHours()),
    h: date.getHours().toString(), // 12시간제 (0~11) 문자열로 변환
    mm: padZero(date.getMinutes()),
    m: date.getMinutes().toString(), // 분 (0~59) 문자열로 변환
    ss: padZero(date.getSeconds()),
    s: date.getSeconds().toString(), // 초 (0~59) 문자열로 변환
    dddd: getDayName(date.getDay()), // 전체 요일 이름
    ddd: getDayName(date.getDay(), true), // 축약된 요일 이름
  }

  const formatted = format.replace(
    /YYYY|YY|MM|M|DD|D|hh|h|mm|m|ss|s|dddd|ddd/g,
    (match) => {
      if (!(match in map)) {
        throw new Error(`Unsupported format: ${match}`)
      }
      return map[match] || match
    },
  )

  return formatted
}

// 문자열을 Date 객체로 변환하는 함수
export const parseMonthFormat = (
  dateString: string,
  format: string = 'YYYY-MM',
): Date => {
  const map: { [key: string]: number } = {
    YYYY: 0,
    YY: 0,
    MM: 0,
    M: 0,
  }

  // 포맷 문자열을 정규식으로 변환
  const formatRegex = format.replace(/YYYY|YY|MM|M/g, (match) => {
    if (match === 'YY') {
      return `(?<${match}>\\d{2})` // 두 자리 연도
    }
    if (match === 'M') {
      return `(?<${match}>\\d{1,2})` // 한 자리 또는 두 자리 월
    }
    return `(?<${match}>\\d{${match.length}})` // 기본 캡처 그룹
  })

  const regex = new RegExp(`^${formatRegex}$`)
  const match = dateString.match(regex)

  if (!match?.groups) {
    throw new Error(
      `Date string "${dateString}" does not match the format "${format}".`,
    )
  }

  // 추출된 값을 숫자로 변환 후 map에 저장
  Object.keys(map).forEach((key) => {
    if (match.groups?.[key]) {
      map[key] = parseInt(match.groups[key], 10)
    }
  })

  // YY 포맷은 2000년대를 기준으로 처리 (예: 23 -> 2023)
  if (map.YY && !map.YYYY) {
    map.YYYY = 2000 + map.YY
  }

  // MM이 없고 M만 있는 경우 처리
  if (!map.MM && map.M) {
    map.MM = map.M
  }

  // Date 객체 생성 (1일로 고정)
  return new Date(map.YYYY, map.MM - 1, 1, 0, 0, 0)
}

export const isSameDate = (dateA: Date, dateB: Date): boolean => {
  return (
    dateA.getFullYear() === dateB.getFullYear() &&
    dateA.getMonth() === dateB.getMonth() &&
    dateA.getDate() === dateB.getDate()
  )
}

export const isSameMonth = (dateA: Date, dateB: Date) => {
  return dateA.getMonth() === dateB.getMonth()
}

export const isBetweenDate = (
  targetDate: Date,
  startDate: Date,
  endDate: Date,
): boolean => {
  return targetDate >= startDate && targetDate <= endDate
}
