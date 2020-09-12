export const incrementTime = (prevTime: string): string => {
  const [minutesAsString, secondsAsString] = prevTime.split(':')
  let minutes: number | string = Number(minutesAsString)
  let seconds: number | string = Number(secondsAsString)
  seconds++
  if (seconds === 60) {
    minutes++
    seconds = 0
  }
  if (minutes < 10) minutes = '0' + minutes
  if (seconds < 10) seconds = '0' + seconds
  return `${minutes}:${seconds}`
}
