export const formatDate = (
  date: Date,
  format: string = 'YYYY-MM-DD',
): string => {
  const padZero = (num: number) => String(num).padStart(2, '0') // 2자리로 맞춤

  const map: { [key: string]: string } = {
    YYYY: String(date.getFullYear()),
    MM: padZero(date.getMonth() + 1),
    DD: padZero(date.getDate()),
    hh: padZero(date.getHours()),
    mm: padZero(date.getMinutes()),
    ss: padZero(date.getSeconds()),
  }

  return format.replace(/YYYY|MM|DD|hh|mm|ss/g, (match) => map[match])
}

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

  // 정규식을 통해 포맷에 맞는 값 추출
  const formatRegex = format.replace(
    /YYYY|MM|DD|hh|mm|ss/g,
    (match) => `(?<${match}>\\d{${match.length}})`,
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
  return new Date(
    map.YYYY,
    map.MM - 1, // 월은 0부터 시작하므로 -1
    map.DD,
    map.hh,
    map.mm,
    map.ss,
  )
}
