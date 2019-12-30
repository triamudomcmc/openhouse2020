import { Data } from '../@types/data'

export const checkTime = (data: Data) => {
  const UNIXcurrentDate = Date.now()
  const UNIXminDate = new Date(`${data.date} ${data.startTime}:00 GMT+7`)
  const UNIXmaxDate = new Date(`${data.date} ${data.endTime}:00 GMT+7`)

  if (
    UNIXcurrentDate > UNIXminDate.getTime() &&
    UNIXcurrentDate < UNIXmaxDate.getTime()
  ) {
    return true
  } else {
    return false
  }
}
