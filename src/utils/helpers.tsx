export const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

export const arraysChecker = (arr, target) => {
  const stringArr = arr.map((item: { [key: string]: any }) => JSON.stringify(item))
  const stringTarget = target.map((item: { [key: string]: any }) => JSON.stringify(item))
  return stringTarget.every((v) => stringArr.includes(v))
}
