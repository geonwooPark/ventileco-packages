export const getParameterByName = (name: string) => {
  name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]')
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
    results = regex.exec(location.search)
  return results == null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '))
}
