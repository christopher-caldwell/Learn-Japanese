import React, { useState, SetStateAction, Dispatch } from 'react'

import MultipleChoiceTargetLetter from 'components/multiple-choice/TargetLetter'
import AnswerCharacter from 'components/multiple-choice/AnswerCharacter'
import Container from 'components/styled/Container'

import { generateAnswersForMultipleChoice, generateCorrectAnswerForMultipleChoice } from 'utils'

interface Props {
  setNumberOfCorrectAnswers: () => void
}
const QuizWrapper = ({ setNumberOfCorrectAnswers }: Props) => {
  const [correctAnswers, setCorrectAnswers] = useState(generateCorrectAnswerForMultipleChoice())
  const { correctEnChar, correctJpChar } = correctAnswers

  const checkAnswer = (attemptedAnswer: string): void => {
    if (attemptedAnswer === correctJpChar) {
      setNumberOfCorrectAnswers()
      setCorrectAnswers(generateCorrectAnswerForMultipleChoice())
    }
  }

  const answerOptions = generateAnswersForMultipleChoice(correctJpChar, true)
  return (
    <>
      <Container align='center' justify='center'>
        <MultipleChoiceTargetLetter targetLetter={correctEnChar} />
      </Container>
      {answerOptions.map(option => (
        <AnswerCharacter checkAnswer={checkAnswer} answerToShow={option} key={option} />
      ))}
    </>
  )
}

export default QuizWrapper
