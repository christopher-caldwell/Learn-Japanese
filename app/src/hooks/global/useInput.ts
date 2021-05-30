import { useState, Dispatch, SetStateAction } from 'react'

/** Returns the state value, the bind, the setter, and resetter in an array */
export const useInput = (initialValue: string, validationRegex?: RegExp): UseInputHook => {
  const initialState = { formatted: initialValue, extracted: initialValue }
  const [value, setValue] = useState<MaskedInput>(initialState)

  const doesPass = validationRegex ? validationRegex.test(value.extracted || '') : undefined

  return [
    value.formatted,
    {
      value: value.formatted,
      onChangeText: (formatted, extracted) => {
        setValue({ formatted, extracted })
      },
    },
    {
      setValue,
      resetValue: () => setValue(initialState),
      doesPass,
      extracted: value.extracted,
    },
  ]
}

interface MaskedInput {
  formatted: string
  extracted?: string
}
export interface UseInputBind {
  value: string
  onChangeText: (formatted: string, extracted?: string) => void
}

export type UseInputHook = [
  string,
  UseInputBind,
  {
    setValue: Dispatch<SetStateAction<MaskedInput>>
    resetValue: () => void
    doesPass?: boolean
    extracted?: string
  }
]
