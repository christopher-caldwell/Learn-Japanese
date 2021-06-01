import { boldFont, themeText } from '@/constants'
import styled from 'styled-components/native'

export const PickersContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
`
export const Container = styled.View`
  margin-bottom: 30px;
`

export const PickerGrid = styled.View`
  margin-top: 20px;
  width: 50%;
`

export const PickerTitle = styled.Text`
  ${themeText}
  ${boldFont}
  font-size: 16px;
  text-align: center;
`
