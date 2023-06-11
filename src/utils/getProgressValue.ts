export function getProgressValue(value: number, max: number) {
  return Math.round((value / max) * 100)
}
