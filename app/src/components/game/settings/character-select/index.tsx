import React, { FC, useState } from 'react'

import { MultiSelect, SelectionItem } from '@/components/shared'
import { characterSetOptions } from '@/constants/japaneseCharacters'
import { Container } from './elements'

const CharacterSelect: FC = () => {
  const [selectedItems, setSelectedItems] = useState<SelectionItem[]>([])
  const onSelectedItemsChange = (incomingItems: SelectionItem[]): void => {
    setSelectedItems(incomingItems)
  }
  console.log('selectedItems', selectedItems)
  return (
    <MultiSelect
      dropDownLabel='Choose a character set'
      items={characterSetOptions}
      onSelectionChange={onSelectedItemsChange}
    />
  )
}

export default CharacterSelect
