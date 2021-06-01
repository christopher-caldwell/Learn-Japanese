import { atom } from 'recoil'

export const gameTimeLimitInMsAtom = atom<number | undefined>({
  key: 'game-time-limit',
  default: undefined,
})

export const gameCharacterSetAtom = atom<CharacterSet[] | undefined>({
  key: 'game-character-set',
  default: undefined,
})

export const gameNumberOfQuestionsLimitAtom = atom<number | undefined>({
  key: 'game-number-of-questions',
  default: undefined,
})

export const gameCurrentQuestionNumberAtom = atom<number>({
  key: 'game-current-question-number',
  default: 1,
})

export const isGameTimerRunningAtom = atom<boolean>({
  key: 'is-game-timer-running',
  default: false,
})

export interface Time {
  minutes: number
  seconds: number
}

export interface CharacterSet {
  jp: string
  en: string
}
