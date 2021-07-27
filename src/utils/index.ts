export const convertDegree = (type: string, value: number) => {
  if (type === 'Fahrenheit') return `${(((value - 32) * 5) / 9).toFixed(4)}°C`
  return `${((value * 9) / 5 + 32).toFixed(4)} °F`
}
