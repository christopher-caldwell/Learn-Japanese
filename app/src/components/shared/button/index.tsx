import React, { FC } from 'react'
import { TouchableOpacityProps, ActivityIndicator } from 'react-native'
import styled, { css } from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

interface ButtonTextProps {
  isOutlined?: boolean
}
const ButtonText = styled.Text<ButtonTextProps>`
  color: ${({ isOutlined, theme }) => (isOutlined ? theme.primaryButtonColor : 'white')};
  font-family: Avenir;
  font-size: 18px;
`

const sharedButtonStyles = css`
  justify-content: center;
  align-items: center;
  padding-vertical: 10px;
  padding-horizontal: 40px;
  border-radius: 10px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`

const NavButtonWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavText = styled.Text`
  display: flex;
  justify-content: center;
  align-items: baseline;
  text-align: center;
  font-size: 20px;
`

const ChevronIcon = styled(Icon)``
interface WrapperProps {
  width?: string | null
}
const SolidButtonWrapper = styled.TouchableOpacity<WrapperProps>`
  background-color: ${({ theme, disabled }) => (disabled ? 'gray' : theme.primaryButtonColor)};
  ${sharedButtonStyles}
  width: ${({ width = '100%' }) => width};
`

export const OutlinedButtonWrapper = styled.TouchableOpacity<WrapperProps>`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.primaryButtonColor};
  ${sharedButtonStyles}
  ${({ width = '100%' }) => (width ? `width: ${width};` : '')};
`

export const SolidButton: FC<ButtonProps> = ({ text, isLoading, ...restProps }) => (
  <SolidButtonWrapper {...restProps}>
    {isLoading ? <ActivityIndicator /> : <ButtonText>{text}</ButtonText>}
  </SolidButtonWrapper>
)

export const OutlinedButton: FC<ButtonProps> = ({ text, ...restProps }) => (
  <OutlinedButtonWrapper {...restProps}>
    <ButtonText isOutlined>{text}</ButtonText>
  </OutlinedButtonWrapper>
)

export const NavigationButton: FC<ButtonProps> = ({ text }) => (
  <NavButtonWrapper>
    <NavText>
      {text}
      <ChevronIcon name='chevron-right' size={22} />
    </NavText>
  </NavButtonWrapper>
)

const BottomActionButtonView = styled.View`
  position: absolute;
  bottom: 20px;
  width: 100%;
`

export const BottomActionButton: FC<ButtonProps> = props => (
  <BottomActionButtonView>
    <SolidButton {...props} />
  </BottomActionButtonView>
)

interface ButtonProps extends TouchableOpacityProps {
  text: string
  isLoading?: boolean
  width?: string | null
}

interface FilterButtonWrapperProps {
  checked: boolean
}
const FilterButtonWrapper = styled.TouchableOpacity<FilterButtonWrapperProps>`
  background-color: ${({ checked, theme }) => (checked ? theme.primaryButtonColor : 'transparent')};
  border: 1px solid ${({ theme }) => theme.primaryButtonColor};
  ${sharedButtonStyles}
  color: ${({ checked, theme }) => (checked ? theme.primaryTextColor : theme.primaryButtonColor)};
  padding-vertical: 3px;
  padding-horizontal: 6px;
  margin: 7px;
`
const FilterButtonText = styled.Text<FilterButtonWrapperProps>`
  color: ${({ checked, theme }) => (checked ? 'white' : theme.primaryButtonColor)};
  font-family: Avenir;
  font-size: 15px;
`

export const FilterButton: FC<FilterButtonProps> = ({ text, checked, ...restProps }) => (
  <FilterButtonWrapper checked={checked} {...restProps}>
    <FilterButtonText checked={checked}>{text}</FilterButtonText>
  </FilterButtonWrapper>
)

interface FilterButtonProps extends ButtonProps {
  checked: boolean
}
