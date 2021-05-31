import React, { FC, useCallback, useState } from 'react'

import { Icon } from '@/components/shared/icon'
import { DropDownItem } from '@/components/shared/drop-down'
import { RowContainer, OptionLabel, CheckBox } from './elements'

export const MultiSelect: FC<Props> = ({ items, onSelectionChange, dropDownLabel }) => {
  const [selectedItems, setSelectedItems] = useState<SelectedItemMap>({})

  const handleSelection = useCallback(
    (selectedIndex: number) => {
      setSelectedItems(currentlySelectedItems => {
        const newSelectedItems = handleSelectionHelper(currentlySelectedItems, selectedIndex, items)
        onSelectionChange(Object.values(newSelectedItems))
        return newSelectedItems
      })
    },
    [items, onSelectionChange]
  )

  return (
    <DropDownItem label={dropDownLabel} isInitiallyOpen={false} icons={icons}>
      {items.map(({ id, label }, index) => (
        <CheckRow
          index={index}
          key={id}
          label={label}
          handleSelect={handleSelection}
          isSelected={!!selectedItems[id]}
        />
      ))}
    </DropDownItem>
  )
}

const icons = {
  isClosed: <Icon size={22} name='chevron-down' />,
  isOpen: <Icon size={22} name='chevron-up' />,
}

const CheckRow: FC<CheckRowProps> = ({ label, index, isSelected, handleSelect }) => {
  const localHandleSelect = useCallback(() => {
    handleSelect(index)
  }, [handleSelect, index])

  return (
    <RowContainer onPress={localHandleSelect}>
      <CheckBox value={isSelected} />
      <OptionLabel>{label}</OptionLabel>
    </RowContainer>
  )
}

const handleSelectionHelper = (
  currentlySelectedItems: SelectedItemMap,
  targetIndex: number,
  allOptions: SelectionItem[]
): SelectedItemMap => {
  const mutableSelections = { ...currentlySelectedItems }
  const itemInFullList = allOptions[targetIndex]
  // Remove the item if inside map
  if (mutableSelections[itemInFullList.id]) delete mutableSelections[itemInFullList.id]
  // Remove the item if inside map
  else mutableSelections[itemInFullList.id] = { ...itemInFullList }
  return mutableSelections
}

interface Props {
  dropDownLabel: string
  items: SelectionItem[]
  onSelectionChange: (selectedItems: SelectionItem[]) => void
}
export interface SelectionItem {
  label: string
  id: string
}

type SelectedItemMap = Record<string, SelectionItem>

interface CheckRowProps {
  label: string
  index: number
  handleSelect: (index: number) => void
  isSelected: boolean
}
