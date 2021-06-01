import React, { FC, useContext } from 'react'
import { ThemeContext } from 'styled-components/native'
import { IconProps } from 'react-native-vector-icons/Icon'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

export const MaterialIcon: FC<IconProps> = ({ color, ...restProps }) => {
  const theme = useContext(ThemeContext)
  return <MaterialCommunityIcon color={color || theme.primaryTextColor} {...restProps} />
}

export const IonIcon: FC<IconProps> = ({ color, ...restProps }) => {
  const theme = useContext(ThemeContext)
  return <Ionicons color={color || theme.primaryTextColor} {...restProps} />
}
