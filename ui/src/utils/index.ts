import { characterMap } from 'constants/japaneseCharacters'
import { CorrectCharacter } from 'interfaces'

// const maxNumOfCharacters = Object.keys(characterMap).length
const charactersInArrayForm = Object.values(characterMap)

export const shuffle = (originalSet: any[]): any[] => {
  for (let iterator = originalSet.length - 1; iterator > 0; iterator--) {
    const randomIndex = Math.floor(Math.random() * iterator)
    const currentItem = originalSet[iterator]
    originalSet[iterator] = originalSet[randomIndex]
    originalSet[randomIndex] = currentItem
  }
  return originalSet
}

const generateRandomNumber = (limit: number = 1): number => {
  return Math.round(Math.random() * limit)
}

export const generateAnswersForMultipleChoice = (correctAnswer: string, useJpChar: boolean = false): string[] => {
  const languageToUse = useJpChar ? 'jp' : 'en'
  // removing the correct answer from the possible choices
  const mutableCharacterArray = [...charactersInArrayForm].filter(
    character => character[languageToUse] !== correctAnswer
  )

  const answers: string[] = []

  for (let iterator = 0; iterator < 3; iterator++) {
    const index = generateRandomNumber(mutableCharacterArray.length - 2)
    const answerToPush = mutableCharacterArray[index]
    mutableCharacterArray.splice(index, 1)
    answers.push(answerToPush[languageToUse])
  }
  answers.push(correctAnswer)
  console.log('correct answer %s 4th option %s', correctAnswer, answers[3])
  const shuffledAnswers = shuffle(answers)
  console.log('shuffled %s 4th option %s', correctAnswer, shuffledAnswers[3])
  return shuffledAnswers
}

export const generateCorrectAnswerForMultipleChoice = (): CorrectCharacter => {
  const indexOfCorrectAnswer = generateRandomNumber(charactersInArrayForm.length - 1)
  try {
    const { en, jp } = charactersInArrayForm[indexOfCorrectAnswer]
    return {
      correctEnChar: en,
      correctJpChar: jp,
    }
  } catch (error) {
    console.error('error', error)
  }
  return {
    correctEnChar: 'en',
    correctJpChar: 'jp',
  }
}
