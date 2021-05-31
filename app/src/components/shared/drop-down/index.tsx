import React, { FC, useState } from 'react'

import { Text, TouchableOpacity, View, StyleSheet, InteractionManager, Animated, LayoutChangeEvent } from 'react-native'

import { Icon } from '@/components/shared'

export const DropDownItem: FC<Props> = ({ backgroundColor, label, children, isInitiallyOpen }) => {
  const [animated, setAnimated] = useState<Animated.Value | undefined>(undefined)
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const [isContentVisible, setIsContentVisible] = useState<boolean>(!!isInitiallyOpen)
  const [headerHeight, setHeaderHeight] = useState<number>(0)
  const [contentHeight, setContentHeight] = useState<number>(0)

  const onAnimLayout = ({ nativeEvent }: LayoutChangeEvent) => {
    if (isMounted) return
    const newHeaderHeight = nativeEvent.layout.height
    if (!isMounted && !isInitiallyOpen) {
      setAnimated(new Animated.Value(newHeaderHeight))
      setIsMounted(true)
      setHeaderHeight(newHeaderHeight)
    } else if (!isMounted) {
      InteractionManager.runAfterInteractions(() => {
        setAnimated(new Animated.Value(newHeaderHeight + contentHeight))
      })
    } else {
      setIsMounted(true)
      setHeaderHeight(newHeaderHeight)
    }
  }

  const onLayout = ({ nativeEvent }: LayoutChangeEvent) => {
    const newContentHeight = nativeEvent.layout.height
    setContentHeight(newContentHeight)
  }

  const runAnimation = () => {
    const initialValue = isContentVisible ? headerHeight + contentHeight : headerHeight
    const finalValue = isContentVisible ? headerHeight : contentHeight + headerHeight

    setIsContentVisible(isContentCurrentlyVisible => !isContentCurrentlyVisible)

    if (!animated) return
    animated.setValue(initialValue)
    Animated.spring(animated, {
      toValue: finalValue,
      useNativeDriver: false,
    }).start()
  }

  return (
    <Animated.View
      style={[
        styles.container,
        {
          height: animated,
          backgroundColor: backgroundColor,
        },
      ]}
    >
      <TouchableOpacity activeOpacity={0.5} onPress={runAnimation}>
        <View onLayout={onAnimLayout}>
          {typeof label === 'string' ? <Text style={styles.contentTxt}>{label}</Text> : label}
          <Icon name={isContentVisible ? 'chevron-up' : 'chevron-down'} />
        </View>
      </TouchableOpacity>
      <View style={styles.content}>
        <View style={[styles.contentChild]} onLayout={onLayout}>
          {children}
        </View>
      </View>
    </Animated.View>
  )
}

interface Props {
  isInitiallyOpen?: boolean
  backgroundColor?: string
  titleBackground?: string
  contentBackground?: string
  underlineColor?: string
  label: JSX.Element | string
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    overflow: 'hidden',
  },
  icons: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 16,
  },
  underline: {
    width: '100%',
    height: 1,
    position: 'absolute',
    top: 0,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  contentChild: {
    padding: 12,
  },
  contentView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
  contentTxt: {
    color: 'black',
    marginLeft: 8,
    fontSize: 12,
  },
  contentFooter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 48,
    paddingHorizontal: 12,
  },
})
