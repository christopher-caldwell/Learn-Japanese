import React from 'react'

import styles from './index.module.sass'

interface Props {
  targetLetter: string
}

const MultipleChoiceTargetLetter = ({ targetLetter }: Props) => {
  return <h1 className={styles.targetLetter}>{targetLetter}</h1>
}

export default MultipleChoiceTargetLetter
