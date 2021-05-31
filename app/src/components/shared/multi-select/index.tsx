import React, { FC, useCallback, useState, useMemo } from 'react'
import { FlatList, ListRenderItem, ScrollView, Text, View } from 'react-native'

import { DropDownItem } from '@/components/shared/drop-down'
import { RowContainer, OptionLabel, CheckBox } from './elements'

export const MultiSelect: FC<Props> = ({ items, onSelectionChange }) => {
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

  const renderRow: ListRenderItem<SelectionItem> = useMemo(
    () =>
      ({ index, item: { label, id } }) =>
        (
          <CheckRow
            index={index}
            key={id}
            label={label}
            handleSelect={handleSelection}
            isSelected={!!selectedItems[id]}
          />
        ),
    [handleSelection, selectedItems]
  )

  return (
    <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView style={{ alignSelf: 'stretch' }}>
        <DropDownItem
          label={
            <View
              style={{
                width: '100%',
                paddingVertical: 8,
                paddingHorizontal: 12,
                flexWrap: 'wrap',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: 'blue',
                }}
              >
                Choose
              </Text>
            </View>
          }
          isInitiallyOpen={false}
        >
          <Text
            style={[
              {
                fontSize: 20,
              },
            ]}
          >
            Yooooo
          </Text>
        </DropDownItem>
        <View style={{ height: 96 }} />
      </ScrollView>
    </View>
  )
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
