import React, { FC, useState, useContext, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { useSetRecoilState } from 'recoil'
import { ThemeContext } from 'styled-components/native'
import Picker from '@gregfrench/react-native-wheel-picker'

import { Time, gameTimeLimitInMsAtom } from '@/store'
import { Title } from '@/components/shared'
import { PickersContainer, PickerGrid, PickerTitle, Container } from './elements'

const pickerOptions = Array(60)
  .fill('')
  .map((_, index) => index)

const TimePicker: FC = () => {
  const [selectedMinutes, setSelectedMinutes] = useState(0)
  const [selectedSeconds, setSelectedSeconds] = useState(0)
  const { primaryTextColor } = useContext(ThemeContext)
  const handleTimeChange = useSetRecoilState(gameTimeLimitInMsAtom)

  useEffect(() => {
    handleTimeChange(selectedMinutes * 60 * 1000 + selectedSeconds * 1000)
  }, [selectedMinutes, selectedSeconds, handleTimeChange])

  return (
    <Container>
      <Title>Time Limit</Title>
      <PickersContainer>
        <PickerGrid>
          <PickerTitle>Minutes</PickerTitle>
          <Picker
            selectedValue={selectedMinutes}
            itemStyle={[styles.item, { color: primaryTextColor }]}
            onValueChange={setSelectedMinutes}
          >
            {pickerOptions.map((value, i) => (
              <Picker.Item label={value.toString()} value={i} key={i} />
            ))}
          </Picker>
        </PickerGrid>
        <PickerGrid>
          <PickerTitle>Seconds</PickerTitle>
          <Picker
            selectedValue={selectedSeconds}
            itemStyle={[styles.item, { color: primaryTextColor }]}
            onValueChange={setSelectedSeconds}
          >
            {pickerOptions.map((value, i) => (
              <Picker.Item label={value.toString()} value={i} key={i} />
            ))}
          </Picker>
        </PickerGrid>
      </PickersContainer>
    </Container>
  )
}

const styles = StyleSheet.create({
  item: {
    fontSize: 16,
  },
})

interface Props {
  onTimeChange: (newTime: Time) => void
}

export default TimePicker
