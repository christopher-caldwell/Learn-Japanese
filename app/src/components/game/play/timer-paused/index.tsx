import { CenteredContainer } from '@/components/shared'
import { Title } from '@/components/shared/list-item/elements'
import React, { FC } from 'react'

const TimerPaused: FC = () => {
  return (
    <CenteredContainer center>
      <Title>Timer Paused</Title>
    </CenteredContainer>
  )
}

export default TimerPaused
