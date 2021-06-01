import { regularFont, themeText } from '@/constants'
import styled from 'styled-components/native'

export const Container = styled.View`
  position: absolute;
  bottom: -5px;
  left: -5px;
  right: -5px;
  height: 50px;
  background-color: ${({ theme }) => theme.secondaryBackgroundColor};
  flex-direction: row;
  justify-content: space-between;
`

export const QuestionsContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  height: 100%;
  padding: 1%;
`

export const QuestionNumber = styled.Text`
  ${themeText}
  ${regularFont}
`

export const TimerControlsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const CountdownContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-right: 20px;
  width: 15%;
`

export const TimerControlButton = styled.TouchableOpacity`
  margin-right: 15px;
`
