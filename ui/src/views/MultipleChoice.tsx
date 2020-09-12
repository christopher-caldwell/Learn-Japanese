import React, { useState } from 'react'

import Timer from 'components/timer/Timer'
import Container from 'components/styled/Container'
import Column from 'components/styled/Col'
import QuizWrapper from 'components/multiple-choice/QuizWrapper'

const MultipleChoice = () => {
  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0)

  const handleCorrectAnswer = (): void => {
    setNumberOfCorrectAnswers(numberOfCorrectAnswers + 1)
  }
  return (
    <>
      <Container padding='1%'>
        <Column cols={6} center>
          <Timer />
        </Column>
        <Column cols={6} center>
          <h4>Correct: {numberOfCorrectAnswers}</h4>
        </Column>
      </Container>
      <QuizWrapper setNumberOfCorrectAnswers={handleCorrectAnswer} />
    </>
  )
}

export default MultipleChoice
