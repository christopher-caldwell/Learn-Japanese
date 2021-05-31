import { boldFont, themeText } from '@/constants'
import styled from 'styled-components/native'

export const PickersContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
`

export const PickerGrid = styled.View`
  width: 50%;
`

export const Title = styled.Text`
  ${themeText}
  ${boldFont}
  font-size: 16px;
  text-align: center;
`
