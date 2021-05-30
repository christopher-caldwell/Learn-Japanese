import React, { FC, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components/native'
import { PickerIOS } from '@react-native-picker/picker'
import { PickerIOSProps } from '@react-native-picker/picker/typings/PickerIOS'
import TextInputMask, { TextInputMaskProps } from 'react-native-text-input-mask'

import { Icon } from '@/components/shared/icon'
import { themeText, boldFont, regularFont } from '@/constants/theme'
import { UseInputBind } from '@/hooks'

const TextInputFieldContainer = styled.View<HelperTextProps>`
  border-bottom-color: ${({ theme, hasError }) => (hasError ? 'red' : theme.primaryButtonColor)};
  border-bottom-width: 1px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  width: 100%;
`
const TextInputField = styled(TextInputMask)`
  height: 40px;
  padding: 1%;
  ${themeText}
  ${regularFont}
  font-size: 16px;
  width: 100%;
`

interface TextContainer {
  noMargin?: boolean
}
const TextContainer = styled.View<TextContainer>`
  margin-bottom: ${({ noMargin = false }) => (noMargin ? '0' : '6%')};
`

const TextLabel = styled.Text`
  ${themeText}
  ${boldFont}
  font-size: 16px;
`

interface HelperTextProps {
  hasError?: boolean
}
const HelperText = styled.Text<HelperTextProps>`
  ${themeText}
  color: ${({ hasError, theme }) => (hasError ? 'red' : theme.primaryTextColor)};
  font-size: 12px;
`

const LabelContainer = styled.View`
  flex-direction: row;
`
const Required = styled.Text`
  margin-left: 2px;
  color: red;
`

export const TextField: FC<TextFieldProps> = ({
  label,
  bind,
  mask,
  helperText,
  required,
  icon,
  noMargin,
  hasError,
  ...restProps
}) => (
  <TextContainer noMargin={noMargin}>
    <LabelContainer>
      {label ? <TextLabel>{label}</TextLabel> : null}
      {required ? <Required>*</Required> : null}
    </LabelContainer>
    <TextInputFieldContainer hasError={hasError}>
      {icon ? <Icon name={icon} size={22} /> : null}
      <TextInputField {...restProps} {...bind} mask={mask} />
    </TextInputFieldContainer>
    {helperText ? <HelperText hasError={hasError}>{helperText}</HelperText> : null}
  </TextContainer>
)

export const Picker: FC<PickerProps> = ({ label, required, selectedValue, onValueChange, options }) => {
  const { primaryTextColor } = useContext(ThemeContext)
  return (
    <TextContainer>
      <LabelContainer>
        <TextLabel>{label}</TextLabel>
        {required ? <Required>*</Required> : null}
      </LabelContainer>
      <PickerIOS itemStyle={{ color: primaryTextColor }} selectedValue={selectedValue} onValueChange={onValueChange}>
        {options.map(({ label: optionLabel, value }) => (
          <PickerIOS.Item key={optionLabel + value} label={optionLabel} value={value} />
        ))}
      </PickerIOS>
    </TextContainer>
  )
}

export interface PickerProps extends PickerIOSProps {
  label: string
  required?: boolean
  options: {
    label: string
    value: string
  }[]
}

interface TextFieldProps extends TextInputMaskProps {
  label?: string
  bind: UseInputBind
  mask?: string
  helperText?: string
  required?: boolean
  icon?: string
  noMargin?: boolean
  hasError?: boolean
}
