import React, { FC } from 'react'

import { Container, Character } from './elements'

const TargetLetter: FC<Props> = ({ targetLetter }) => {
  return (
    <Container>
      <Character>{targetLetter}</Character>
    </Container>
  )
}

interface Props {
  targetLetter: string
}

export default TargetLetter
