import styled from 'styled-components/native'

import { themeText } from '@/constants'

export const Container = styled.View`
  height: 40%;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const Character = styled.Text`
  ${themeText};
  font-size: 120px;
`
