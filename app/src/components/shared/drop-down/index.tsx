import React, { FC, useState } from 'react'

import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  InteractionManager,
  Animated,
  LayoutChangeEvent,
  ScrollView,
} from 'react-native'

export const DropDownItem: FC<Props> = ({ label, children, isInitiallyOpen, icons }) => {
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
        },
      ]}
    >
      <TouchableOpacity
        onLayout={onAnimLayout}
        style={styles.activatorButton}
        activeOpacity={0.5}
        onPress={runAnimation}
      >
        {typeof label === 'string' ? <Text style={styles.contentTxt}>{label}</Text> : label}
        {icons ? (isContentVisible ? icons.isOpen : icons.isClosed) : null}
      </TouchableOpacity>
      <View style={styles.content}>
        <View style={[styles.contentChild, isMounted ? styles.fullOpacity : styles.hiddenOpacity]} onLayout={onLayout}>
          {children}
        </View>
      </View>
    </Animated.View>
  )
}

interface Props {
  isInitiallyOpen?: boolean
  /** The text label shown */
  label: JSX.Element | string
  icons?: {
    /** The Icon show when the drop down is open */
    isOpen: JSX.Element
    /** The Icon show when the drop down is closed */
    isClosed: JSX.Element
  }
}

const styles = StyleSheet.create({
  fullOpacity: {
    opacity: 1,
  },
  hiddenOpacity: {
    opacity: 0,
  },
  container: {
    flexDirection: 'column',
    overflow: 'hidden',
    flex: 1,
  },
  activatorButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2%',
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
    fontSize: 16,
    width: '90%',
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
