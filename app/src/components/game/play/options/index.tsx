import React, { FC } from 'react'

import { CharacterSet } from '@/store'
import { OptionButton, OptionLabel, OptionContainer } from './elements'

const Options: FC<Props> = ({ options }: Props) => {
  return (
    <OptionContainer>
      {options.map(option => (
        <OptionButton>
          <OptionLabel>{option.en}</OptionLabel>
        </OptionButton>
      ))}
    </OptionContainer>
  )
}

interface Props {
  options: CharacterSet[]
}

export default Options
