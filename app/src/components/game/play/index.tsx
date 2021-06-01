import React, { FC, useMemo } from 'react'
import { useRecoilValue } from 'recoil'

import {
  isGameTimerRunningAtom,
  gameCurrentQuestionNumberAtom,
  gameCharacterSetAtom,
  gameNumberOfQuestionsLimitAtom,
  CharacterSet,
} from '@/store'
import BottomStatus from './bottom-status'
import TimerPaused from './timer-paused'
import TargetLetter from './target-letter'
import Options from './options'
import { Container } from './elements'

const Play: FC = () => {
  const isGameTimerRunning = useRecoilValue(isGameTimerRunningAtom)
  const characterOptions = useRecoilValue(gameCharacterSetAtom)
  const currentQuestionNumber = useRecoilValue(gameCurrentQuestionNumberAtom)
  const questionLimit = useRecoilValue(gameNumberOfQuestionsLimitAtom)
  const questions = useMemo(() => {
    return characterOptions ? createQuestionList(characterOptions || [], questionLimit || 0) : []
  }, [characterOptions, questionLimit])
  const targetQuestion = questions[currentQuestionNumber || 0]
  return (
    <Container>
      {isGameTimerRunning ? (
        <>
          <TargetLetter targetLetter={targetQuestion.answer.jp} />
          <Options options={targetQuestion.options} />
        </>
      ) : (
        <TimerPaused />
      )}
      <BottomStatus />
    </Container>
  )
}

const generateRandomIndex = (limit: number): number => {
  return Math.floor(Math.random() * limit + 1)
}

const generateQuestionAnswer = (correctIndex: number, limit: number, options: CharacterSet[]): CharacterSet => {
  const targetIndex = generateRandomIndex(limit)
  if (targetIndex === correctIndex) return generateQuestionAnswer(correctIndex, limit, options)
  return options[targetIndex]
}

const createQuestionList = (allOptions: CharacterSet[], limit: number): Question[] => {
  const maxIndexOfOptions = allOptions.length - 1
  const questions: Question[] = []
  for (let index = 0; index <= limit; index++) {
    const correctAnswerIndex = generateRandomIndex(maxIndexOfOptions)
    const answer = allOptions[correctAnswerIndex]
    const incorrectOptions: CharacterSet[] = [1, 2, 3].map(() =>
      generateQuestionAnswer(correctAnswerIndex, maxIndexOfOptions, allOptions)
    )
    const options: CharacterSet[] = [...incorrectOptions, answer]
    questions.push({ answer, options })
  }
  return questions
}

interface Question {
  answer: CharacterSet
  options: CharacterSet[]
}

export default Play
