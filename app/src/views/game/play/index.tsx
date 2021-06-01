import React, { FC, useState, useCallback } from 'react'

import { ViewContainer } from '@/components/shared'
import Countdown from '@/components/game/play/countdown'
import PlayGame from '@/components/game/play'

const Play: FC = () => {
  const [hasGameStarted, setHasGameStarted] = useState<boolean>(false)
  const handleCountdownEnd = useCallback(() => {
    setHasGameStarted(true)
  }, [])
  return (
    <ViewContainer>{hasGameStarted ? <PlayGame /> : <Countdown onCountdownDone={handleCountdownEnd} />}</ViewContainer>
  )
}

export default Play
