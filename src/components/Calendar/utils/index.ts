// 날짜 객체를 특정 포맷으로 변환하는 함수
export const formatDate = (
  date: Date,
  format: string = 'YYYY-MM-DD',
): string => {
  const padZero = (num: number) => String(num).padStart(2, '0') // 2자리로 맞춤

  const map: { [key: string]: string } = {
    YYYY: String(date.getFullYear()),
    MM: padZero(date.getMonth() + 1), // 월은 1부터 시작
    DD: padZero(date.getDate()),
    hh: padZero(date.getHours()),
    mm: padZero(date.getMinutes()),
    ss: padZero(date.getSeconds()),
  }

  return format.replace(/YYYY|MM|DD|hh|mm|ss/g, (match) => map[match] || match)
}

// 문자열을 Date 객체로 변환하는 함수
export const parseDate = (
  dateString: string,
  format: string = 'YYYY-MM-DD',
): Date => {
  const map: { [key: string]: number } = {
    YYYY: 0,
    MM: 0,
    DD: 0,
    hh: 0,
    mm: 0,
    ss: 0,
  }

  // 포맷 문자열을 정규식으로 변환
  const formatRegex = format.replace(
    /YYYY|MM|DD|hh|mm|ss/g,
    (match) => `(?<${match}>\\d{${match.length}})`, // 캡처 그룹 생성
  )

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

  // Date 객체 생성
  return new Date(map.YYYY, map.MM - 1, map.DD || 1, map.hh, map.mm, map.ss)
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
