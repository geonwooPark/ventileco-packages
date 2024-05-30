export const getQueries = (queries: Record<string, string>) => {
  let result = ''
  for (const key in queries) {
    result += `&${key}=${queries[key]}`
  }
  return result
}
