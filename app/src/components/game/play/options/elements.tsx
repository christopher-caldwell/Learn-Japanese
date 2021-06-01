import { regularFont, themeText } from '@/constants'
import styled from 'styled-components/native'

export const OptionContainer = styled.View`
  height: 100%;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
export const OptionButton = styled.TouchableOpacity`
  height: 23%;
  width: 45%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 2%;
`
export const OptionLabel = styled.Text`
  ${themeText}
  ${regularFont}
  font-size: 36px;
`
