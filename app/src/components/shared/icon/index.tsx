import React, { FC, useContext } from 'react'
import { ThemeContext } from 'styled-components/native'
import { IconProps } from 'react-native-vector-icons/Icon'
import VectorIcon from 'react-native-vector-icons/MaterialCommunityIcons'

export const Icon: FC<IconProps> = ({ color, ...restProps }) => {
  const theme = useContext(ThemeContext)
  return <VectorIcon color={color || theme.primaryTextColor} {...restProps} />
}
