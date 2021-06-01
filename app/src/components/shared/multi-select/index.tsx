import React, { Dispatch, FC, SetStateAction, useCallback, useEffect, useState } from 'react'

import { IonIcon } from '@/components/shared/icon'
import { DropDownItem } from '@/components/shared/drop-down'
import { RowContainer, OptionLabel, CheckBox } from './elements'

export const MultiSelect: FC<Props> = ({ items, onSelectionChange, dropDownLabel }) => {
  const [selectedItems, setSelectedItems] = useState<SelectedItemMap>({})
  const [isSelectAllChosen, setIsSelectAllChosen] = useState<boolean>(false)

  useEffect(() => {
    onSelectionChange(Object.values(selectedItems))
  }, [selectedItems, onSelectionChange])

  const handleSelection = useCallback(
    (selectedIndex: number) => {
      setSelectedItems(currentlySelectedItems => {
        const newSelectedItems = handleSelectionHelper(
          currentlySelectedItems,
          selectedIndex,
          items,
          setIsSelectAllChosen
        )
        return newSelectedItems
      })
    },
    [items]
  )

  const handleSelectAll = useCallback(() => {
    setIsSelectAllChosen(isCurrentlySelected => {
      setSelectedItems(currentlySelectedItems => {
        const newSelectedItems = handleSelectAllHelper(currentlySelectedItems, items, !isCurrentlySelected)
        return newSelectedItems
      })
      return !isCurrentlySelected
    })
  }, [items, setIsSelectAllChosen])

  return (
    <DropDownItem label={dropDownLabel} isInitiallyOpen={false} icons={icons}>
      <CheckRow label='Select All' handleSelect={handleSelectAll} isSelected={isSelectAllChosen} />
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
  isClosed: <IonIcon size={22} name='chevron-down' />,
  isOpen: <IonIcon size={22} name='chevron-up' />,
}

const CheckRow: FC<CheckRowProps> = ({ label, index, isSelected, handleSelect }) => {
  const localHandleSelect = useCallback(() => {
    handleSelect(index || 0)
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
  allOptions: SelectionItem[],
  setIsSelectAllChosen: Dispatch<SetStateAction<boolean>>
): SelectedItemMap => {
  const mutableSelections = { ...currentlySelectedItems }
  const itemInFullList = allOptions[targetIndex]
  // Remove the item if inside map
  if (mutableSelections[itemInFullList.id]) delete mutableSelections[itemInFullList.id]
  // Remove the item if inside map
  else mutableSelections[itemInFullList.id] = { ...itemInFullList }
  setIsSelectAllChosen(false)
  return mutableSelections
}

const handleSelectAllHelper = (
  currentlySelectedItems: SelectedItemMap,
  allOptions: SelectionItem[],
  isSelectAllChosen: boolean
): SelectedItemMap => {
  const mutableSelections = { ...currentlySelectedItems }
  if (isSelectAllChosen) {
    allOptions.forEach(itemInFullList => {
      mutableSelections[itemInFullList.id] = { ...itemInFullList }
    })
  } else {
    allOptions.forEach(itemInFullList => {
      delete mutableSelections[itemInFullList.id]
    })
  }
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
  index?: number
  handleSelect: (index: number) => void
  isSelected: boolean
}
