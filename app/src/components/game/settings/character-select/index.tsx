import React, { FC, useState } from 'react'
import { MultiSelect, SelectionItem } from '@/components/shared'

const items: SelectionItem[] = [
  {
    id: '92iijs7yta',
    label: 'Ondo',
  },
  {
    id: 'a0s0a8ssbsd',
    label: 'Ogun',
  },
  {
    id: '16hbajsabsd',
    label: 'Calabar',
  },
  {
    id: 'nahs75a5sg',
    label: 'Lagos',
  },
  {
    id: '667atsas',
    label: 'Maiduguri',
  },
  {
    id: 'hsyasajs',
    label: 'Anambra',
  },
  {
    id: 'djsjudksjd',
    label: 'Benue',
  },
  {
    id: 'sdhyaysdj',
    label: 'Kaduna',
  },
  {
    id: 'suudydjsjd',
    label: 'Abuja',
  },
]

const CharacterSelect: FC = () => {
  const [selectedItems, setSelectedItems] = useState<SelectionItem[]>([])
  const onSelectedItemsChange = (incomingItems: SelectionItem[]): void => {
    setSelectedItems(incomingItems)
  }
  console.log('selectedItems', selectedItems)
  return <MultiSelect items={items} onSelectionChange={onSelectedItemsChange} />
}

export default CharacterSelect
