import styled from 'styled-components/native'
import NativeCheckBox from '@react-native-community/checkbox'

import { regularFont, themeText } from '@/constants'

export const RowContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-vertical: 2%;
`

export const OptionLabel = styled.Text`
  ${regularFont}
  ${themeText}
  font-size: 16px;
  min-height: 20px;
`

export const CheckBox = styled(NativeCheckBox)`
  margin-right: 4%;
  height: 24px;
  width: 24px;
`
