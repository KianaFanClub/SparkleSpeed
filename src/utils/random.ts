function number(max = 1,min = 0) {
  return Math.random()*(max-min) + min
}
export const random = {
  number
}
