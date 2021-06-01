import React, { FC, useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import debounce from 'lodash.debounce'

import { TextField, Title } from '@/components/shared'
import { gameNumberOfQuestionsLimitAtom } from '@/store'
import { useInput } from '@/hooks'
import { Container } from '../time-limit/elements'

const NumberOfQuestions: FC = () => {
  const setNumberOfQuestions = useSetRecoilState(gameNumberOfQuestionsLimitAtom)
  const [numberOfQuestions, numberOfQuestionsBind] = useInput('')

  const updateNumberOfQuestions = debounce((incomingNumberOfQuestions: number) => {
    setNumberOfQuestions(incomingNumberOfQuestions)
  }, 200)

  useEffect(() => {
    if (numberOfQuestions !== '') {
      updateNumberOfQuestions(parseInt(numberOfQuestions))
    }
  }, [numberOfQuestions, updateNumberOfQuestions])

  return (
    <Container>
      <Title>Number of Questions</Title>
      <TextField bind={numberOfQuestionsBind} mask='[000]' />
    </Container>
  )
}

export default NumberOfQuestions
