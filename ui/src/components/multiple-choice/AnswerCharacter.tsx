import React from 'react'

import Container from 'components/styled/Container'
import Col from 'components/styled/Col'

import styles from './index.module.sass'

interface Props {
  answerToShow: string
  checkAnswer: (answerToShow: string) => void
}
const AnswerCharacter = ({ answerToShow, checkAnswer }: Props) => {
  return (
    <Col cols={6}>
      <Container justify='center'>
        <h2 onClick={() => checkAnswer(answerToShow)} className={styles.answerToShow}>
          {answerToShow}
        </h2>
      </Container>
    </Col>
  )
}

export default AnswerCharacter
