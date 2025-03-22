export const shallowEqual = (itemA: any, itemB: any) => {
  if (Object.is(itemA, itemB)) return true
  if (
    typeof itemA !== 'object' ||
    itemA === null ||
    typeof itemB !== 'object' ||
    itemB === null
  )
    return false

  const keysItemA = Object.keys(itemA)
  const keysItemB = Object.keys(itemB)

  if (keysItemA.length !== keysItemB.length) return false

  return keysItemA.every(
    (key) =>
      Object.prototype.hasOwnProperty.call(itemB, key) &&
      Object.is(itemA[key], itemB[key]),
  )
}
