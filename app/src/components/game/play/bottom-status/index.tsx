import React, { FC, useCallback, useEffect } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { useTimer } from 'react-compound-timer'

import { IonIcon } from '@/components/shared'
import {
  gameTimeLimitInMsAtom,
  gameNumberOfQuestionsLimitAtom,
  isGameTimerRunningAtom,
  gameCurrentQuestionNumberAtom,
} from '@/store'
import {
  Container,
  QuestionNumber,
  CountdownContainer,
  QuestionsContainer,
  TimerControlsContainer,
  TimerControlButton,
} from './elements'

const BottomStatus: FC = () => {
  const [isGameTimerRunning, setIsGameTimerRunning] = useRecoilState(isGameTimerRunningAtom)
  const timeLimit = useRecoilValue(gameTimeLimitInMsAtom)
  const numberOfQuestions = useRecoilValue(gameNumberOfQuestionsLimitAtom)
  const currentQuestionNumber = useRecoilValue(gameCurrentQuestionNumberAtom)
  const { value, controls } = useTimer({ direction: 'backward', initialTime: timeLimit })

  const toggleTimer = useCallback(() => {
    setIsGameTimerRunning(isTimerRunning => {
      isTimerRunning ? controls.pause() : controls.start()

      return !isTimerRunning
    })
  }, [setIsGameTimerRunning, controls])

  useEffect(() => {
    controls.start()
    setIsGameTimerRunning(true)
  }, [controls, setIsGameTimerRunning])

  return (
    <Container>
      <QuestionsContainer>
        <QuestionNumber>{currentQuestionNumber}</QuestionNumber>
        <QuestionNumber>/</QuestionNumber>
        <QuestionNumber>{numberOfQuestions}</QuestionNumber>
      </QuestionsContainer>
      <TimerControlsContainer>
        <TimerControlButton>
          <IonIcon size={40} name='stop' />
        </TimerControlButton>
        <TimerControlButton onPress={toggleTimer}>
          <IonIcon size={40} name={isGameTimerRunning ? 'pause' : 'play'} />
        </TimerControlButton>
      </TimerControlsContainer>
      <CountdownContainer>
        <QuestionNumber>
          {value.m}:{value.s}
        </QuestionNumber>
      </CountdownContainer>
    </Container>
  )
}

export default BottomStatus
