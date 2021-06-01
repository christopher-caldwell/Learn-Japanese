import React, { FC, useState, useEffect } from 'react'

import { CenteredContainer } from '@/components/shared'
import { CountdownNumber } from './elements'

const Countdown: FC<Props> = ({ onCountdownDone }) => {
  const [secondsRemaining, setSecondsRemaining] = useState<number>(3)
  useEffect(() => {
    const timer = setTimeout(() => {
      setSecondsRemaining(secondsCurrentlyLeft => secondsCurrentlyLeft - 1)
    }, 1000)
    if (secondsRemaining === 0) {
      clearTimeout(timer)
      onCountdownDone()
    }
  })
  return (
    <CenteredContainer center>
      <CountdownNumber>{secondsRemaining}</CountdownNumber>
    </CenteredContainer>
  )
}

interface Props {
  onCountdownDone: () => void
}

export default Countdown
