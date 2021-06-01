import React, { FC, useCallback } from 'react'
import { useSetRecoilState } from 'recoil'

import { characterSetMap, CharacterSetId } from '@/constants/japaneseCharacters'
import { gameCharacterSetAtom, CharacterSet } from '@/store'
import { Title, MultiSelect, SelectionItem } from '@/components/shared'
import { characterSetOptions } from '@/constants/japaneseCharacters'
import { Container } from '../time-limit/elements'

const CharacterSelect: FC = () => {
  const setSelectedCharacters = useSetRecoilState(gameCharacterSetAtom)

  const onSelectedItemsChange = useCallback(
    (incomingItems: SelectionItem[]): void => {
      const newCharacters = onChangeHandler(incomingItems)
      setSelectedCharacters(newCharacters)
    },
    [setSelectedCharacters]
  )

  return (
    <Container>
      <Title>Characters</Title>
      <MultiSelect
        dropDownLabel='Choose all you want to practice with'
        items={characterSetOptions}
        onSelectionChange={onSelectedItemsChange}
      />
    </Container>
  )
}

const onChangeHandler = (incomingItems: SelectionItem[]): CharacterSet[] => {
  const sets: CharacterSet[] = []
  incomingItems.forEach(item => {
    const potentialMatch = characterSetMap[item.id as CharacterSetId]
    if (potentialMatch) sets.push(...potentialMatch)
  })
  console.log('sets', sets)
  return sets
}

export default CharacterSelect
