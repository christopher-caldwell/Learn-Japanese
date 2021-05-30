import styled from 'styled-components/native'

import { regularFont, boldFont, themeText } from '@/constants'

export const Container = styled.View`
  height: 75px;
  flex-direction: row;
  justify-content: space-between;
  padding: 2%;
`

export const Button = styled.TouchableOpacity`
  flex: 1;
`
export const TextContainer = styled.View``

export const Title = styled.Text`
  ${boldFont}
  ${themeText}
  font-size: 18px;
`

export const Subtitle = styled.Text`
  ${regularFont}
  ${themeText}
  font-size: 13px;
`
