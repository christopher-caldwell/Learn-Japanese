import React, { FC, useContext } from 'react'
import { StyleSheet, View, Animated } from 'react-native'
import * as shape from 'd3-shape'
import Svg, { Path } from 'react-native-svg'
import styled, { ThemeContext } from 'styled-components/native'
import { BottomTabBarProps, BottomTabBarOptions } from '@react-navigation/bottom-tabs'

import { tabBarHeight, width } from '@/constants'
import { Routes } from '@/router/routes'
import StaticTabBar, { Tab } from './Static'

export const TabBar: FC<Props> = ({ navigation }) => {
  const { secondaryBackgroundColor } = useContext(ThemeContext)
  return (
    <>
      <BackdropContainer>
        <AnimatedSvg width={width * 2} height={tabBarHeight} style={{ transform: [{ translateX }] }}>
          <Path fill={secondaryBackgroundColor} {...{ d }} />
        </AnimatedSvg>
        <View style={StyleSheet.absoluteFill}>
          <StaticTabBar navigate={navigation.navigate} tabs={tabs} value={animatedValue} />
        </View>
      </BackdropContainer>
      <SafeAreaView />
    </>
  )
}

const AnimatedSvg = Animated.createAnimatedComponent(Svg)
const tabs: Tab[] = [
  {
    name: Routes.Home,
    icon: 'home',
  },
  {
    name: Routes.Game,
    icon: 'language',
  },
  {
    name: Routes.Profile,
    icon: 'person',
  },
]
const tabWidth = width / tabs.length

const getPath = (): string => {
  const left = shape
    .line()
    .x(([x]) => x)
    .y(([_, y]) => y)([
    [0, 0],
    [width, 0],
  ])
  const tab = shape
    .line()
    .x(([x]) => x)
    .y(([_, y]) => y)
    .curve(shape.curveBasis)([
    [width + 10, 0],
    [width + 20, 0],
    [width + 25, 5],
    [width + 30, tabBarHeight - 15],
    [width + tabWidth - 30, tabBarHeight - 15],
    [width + tabWidth - 25, 5],
    [width + tabWidth - 20, 0],
    [width + tabWidth - 10, 0],
  ])

  const right = shape
    .line()
    .x(([x]) => x)
    .y(([_, y]) => y)([
    [width + tabWidth, 0],
    [width * 2, 0],
    [width * 2, tabBarHeight],
    [0, tabBarHeight],
    [0, 0],
  ])
  return `${left} ${tab} ${right}`
}
const d = getPath()
const animatedValue = new Animated.Value(0)
const translateX = animatedValue.interpolate({
  inputRange: [0, width],
  outputRange: [-width, 0],
})

const BackdropContainer = styled.View`
  width: ${width}px;
  height: ${tabBarHeight}px;
  background-color: ${({ theme }) => theme.primaryBackgroundColor};
`
const SafeAreaView = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.secondaryBackgroundColor};
`

interface Props extends BottomTabBarProps<BottomTabBarOptions> {}
