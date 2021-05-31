import React, { FC, useState } from 'react'
import Picker from '@gregfrench/react-native-wheel-picker'

import { PickersContainer, PickerGrid, Title } from './elements'

const pickerOptions = Array(60)
  .fill('')
  .map((_, index) => index)

const TimePicker: FC = () => {
  const [selectedMinutes, setSelectedMinutes] = useState(0)
  const [selectedSeconds, setSelectedSeconds] = useState(0)

  return (
    <PickersContainer>
      <PickerGrid>
        <Title>Minutes</Title>
        <Picker
          selectedValue={selectedMinutes}
          itemStyle={{ color: 'black', fontSize: 16 }}
          onValueChange={index => setSelectedMinutes(index as number)}
        >
          {pickerOptions.map((value, i) => (
            <Picker.Item label={value.toString()} value={i} key={i} />
          ))}
        </Picker>
      </PickerGrid>
      <PickerGrid>
        <Title>Seconds</Title>
        <Picker
          selectedValue={selectedSeconds}
          itemStyle={{ color: 'black', fontSize: 16 }}
          onValueChange={index => setSelectedSeconds(index as number)}
        >
          {pickerOptions.map((value, i) => (
            <Picker.Item label={value.toString()} value={i} key={i} />
          ))}
        </Picker>
      </PickerGrid>
    </PickersContainer>
  )
}

export default TimePicker
