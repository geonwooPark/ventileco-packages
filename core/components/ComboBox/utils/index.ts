export function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $&는 일치하는 전체 문자열을 의미합니다.
}
