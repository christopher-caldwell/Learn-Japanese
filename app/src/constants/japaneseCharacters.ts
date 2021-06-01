import { CharacterSet } from '@/store/game'

export enum CharacterSetId {
  Vowels = 'vowels',
  KCharacters = 'kCharacters',
}

export const characterMap: Record<string, CharacterSet> = {
  a: {
    jp: 'あ',
    en: 'a',
  },
  i: {
    jp: 'い',
    en: 'i',
  },
  u: {
    jp: 'う',
    en: 'u',
  },
  e: {
    jp: 'え',
    en: 'e',
  },
  o: {
    jp: 'お',
    en: 'o',
  },
  // -- //
  ka: {
    jp: 'か',
    en: 'ka',
  },
  ki: {
    jp: 'き',
    en: 'ki',
  },
  ku: {
    jp: 'く',
    en: 'ku',
  },
  ke: {
    jp: 'け',
    en: 'ke',
  },
  ko: {
    jp: 'こ',
    en: 'ko',
  },
  // -- //
  sa: {
    jp: 'さ',
    en: 'sa',
  },
  shi: {
    jp: 'し',
    en: 'shi',
  },
  su: {
    jp: 'す',
    en: 'su',
  },
  se: {
    jp: 'せ',
    en: 'se',
  },
  so: {
    jp: 'そ',
    en: 'so',
  },
  // -- //
  ta: {
    jp: 'た',
    en: 'ta',
  },
  chi: {
    jp: 'ち',
    en: 'chi',
  },
  tsu: {
    jp: 'つ',
    en: 'tsu',
  },
  te: {
    jp: 'て',
    en: 'te',
  },
  to: {
    jp: 'と',
    en: 'to',
  },
  // -- //
  na: {
    jp: 'な',
    en: 'na',
  },
  ni: {
    jp: 'に',
    en: 'ni',
  },
  nu: {
    jp: 'ぬ',
    en: 'nu',
  },
  ne: {
    jp: 'ね',
    en: 'ne',
  },
  no: {
    jp: 'の',
    en: 'no',
  },
  // -- //
  ha: {
    jp: 'は',
    en: 'ha',
  },
  hi: {
    jp: 'ひ',
    en: 'hi',
  },
  fu: {
    jp: 'ふ',
    en: 'fu',
  },
  he: {
    jp: 'へ',
    en: 'he',
  },
  ho: {
    jp: 'ほ',
    en: 'ho',
  },
  // -- //
  ma: {
    jp: 'ま',
    en: 'ma',
  },
  mi: {
    jp: 'み',
    en: 'mi',
  },
  mu: {
    jp: 'む',
    en: 'mu',
  },
  me: {
    jp: 'め',
    en: 'me',
  },
  mo: {
    jp: 'も',
    en: 'mo',
  },
  // -- //
  ya: {
    jp: 'や',
    en: 'ya',
  },
  yu: {
    jp: 'ゆ',
    en: 'yu',
  },
  yo: {
    jp: 'よ',
    en: 'yo',
  },
  // ---- //
  ra: {
    jp: 'ら',
    en: 'ra',
  },
  ri: {
    jp: 'り',
    en: 'ri',
  },
  ru: {
    jp: 'る',
    en: 'ru',
  },
  re: {
    jp: 'れ',
    en: 're',
  },
  ro: {
    jp: 'ろ',
    en: 'ro',
  },
  // ---- //
  wa: {
    jp: 'わ',
    en: 'wa',
  },
  wi: {
    jp: 'ゐ',
    en: 'wi',
  },
  we: {
    jp: 'ゑ',
    en: 'we',
  },
  wo: {
    jp: 'を',
    en: 'wo',
  },
}

const { a, e, i, o, u, ka, ke, ki, ko, ku } = characterMap

const vowels = [a, e, i, o, u]
const kCharacters = [ka, ke, ki, ko, ku]

export const characterSetMap: Record<CharacterSetId, CharacterSet[]> = {
  [CharacterSetId.Vowels]: vowels,
  [CharacterSetId.KCharacters]: kCharacters,
}

export const characterSetOptions: CharacterSetOption[] = [
  {
    label: 'Vowels',
    id: CharacterSetId.Vowels,
  },
  {
    label: "K's",
    id: CharacterSetId.KCharacters,
  },
]

export interface CharacterSetOption {
  label: string
  id: CharacterSetId
}
