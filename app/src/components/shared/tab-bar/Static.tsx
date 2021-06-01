import React, { FC, useContext, useMemo, useCallback, Fragment, useEffect } from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native'
import styled, { ThemeContext } from 'styled-components/native'
import { BottomTabBarProps, BottomTabBarOptions } from '@react-navigation/bottom-tabs'
import { useRecoilState } from 'recoil'

import { activeTabAtom } from '@/store'
import { width, tabBarHeight } from '@/constants'
import { IonIcon } from '@/components/shared'
import { Routes } from '@/router/routes'

const StaticTabBar: FC<TabBarProps> = ({ tabs, value, navigate }) => {
  const { primaryTextColor, secondaryTextColor } = useContext(ThemeContext)
  const [activeTab, setActiveTab] = useRecoilState(activeTabAtom)

  const values = useMemo(() => tabs.map((_, index) => new Animated.Value(index === 0 ? 1 : 0)), [tabs])
  const tabWidth = useMemo(() => width / tabs.length, [tabs])

  const onPress = useCallback(
    ({ name }: Tab, index: number) => {
      Animated.sequence([
        Animated.parallel(
          values.map(v =>
            Animated.timing(v, {
              toValue: 0,
              duration: 100,
              useNativeDriver: true,
            })
          )
        ),
        Animated.parallel([
          Animated.spring(value, {
            toValue: tabWidth * index,
            useNativeDriver: true,
          }),
          Animated.spring(values[index], {
            toValue: 1,
            useNativeDriver: true,
          }),
        ]),
      ]).start()
      if (activeTab !== name) setActiveTab(name)
      navigate(name)
    },
    [navigate, tabWidth, value, values, activeTab, setActiveTab]
  )

  useEffect(() => {
    const tab = tabs.find(({ name }) => name === activeTab)
    const tabIndex = tabs.findIndex(({ name }) => name === activeTab)
    if (tab) onPress(tab, tabIndex)
  }, [activeTab, onPress, tabs])

  return (
    <Container>
      {tabs.map((tab, key) => {
        const cursor = tabWidth * key
        const opacity = value.interpolate({
          inputRange: [cursor - tabWidth, cursor, cursor + tabWidth],
          outputRange: [1, 0, 1],
          extrapolate: 'clamp',
        })
        const translateY = values[key].interpolate({
          inputRange: [0, 1],
          outputRange: [tabBarHeight, 0],
          extrapolate: 'clamp',
        })
        const opacity1 = values[key].interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        })
        return (
          <Fragment {...{ key }}>
            <TouchableWithoutFeedback onPress={() => onPress(tab, key)}>
              <Animated.View style={[styles.tab, { opacity }]}>
                <IonIcon name={tab.icon} color={secondaryTextColor} size={25} />
              </Animated.View>
            </TouchableWithoutFeedback>
            <Animated.View
              style={[
                styles.thing,
                {
                  left: tabWidth * key,
                  width: tabWidth,
                  opacity: opacity1,
                  transform: [{ translateY }],
                },
              ]}
            >
              <View>
                <IonIcon name={tab.icon} color={primaryTextColor} size={25} />
              </View>
            </Animated.View>
          </Fragment>
        )
      })}
    </Container>
  )
}

export default StaticTabBar

const Container = styled.View`
  flex-direction: row;
`

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: tabBarHeight,
  },
  thing: {
    position: 'absolute',
    height: tabBarHeight,
    alignItems: 'center',
  },
})

export interface Tab {
  name: Routes
  icon: string
}

interface TabBarProps {
  tabs: Tab[]
  navigate: BottomTabBarProps<BottomTabBarOptions>['navigation']['navigate']
  value: Animated.Value
}
