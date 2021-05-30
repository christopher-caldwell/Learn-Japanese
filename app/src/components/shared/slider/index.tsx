import React, { FC, useCallback, useContext } from 'react'
import { ThemeContext } from 'styled-components/native'
import NativeSlider, { SliderProps } from '@react-native-community/slider'
import debounce from 'lodash.debounce'

export const Slider: FC<Props> = ({
  onValueChange = () => {},
  minimumValue = 0,
  maximumValue = 100,
  step = 1,
  ...restProps
}: Props) => {
  const { primaryButtonColor } = useContext(ThemeContext)
  const handleChange = useCallback((newValue: number) => onValueChange(newValue), [])
  return (
    // @ts-ignore - Their own prop declarations are wrong..
    <NativeSlider
      step={step}
      onValueChange={debounce(handleChange, 200)}
      minimumValue={minimumValue}
      maximumValue={maximumValue}
      minimumTrackTintColor={primaryButtonColor}
      {...restProps}
    />
  )
}

interface Props extends SliderProps {}
