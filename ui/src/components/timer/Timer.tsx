import React, { useState, useEffect } from 'react'

import { incrementTime } from 'utils/time'

const Timer = () => {
  const [time, setTime] = useState('00:00')

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = incrementTime(time)
      setTime(newTime)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  })

  return <h4 style={{ marginBottom: 0 }}>{time}</h4>
}

export default Timer
