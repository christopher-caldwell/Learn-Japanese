import React, { FC, useCallback } from 'react'
import { TouchableOpacity, ActionSheetIOS, ActionSheetIOSOptions } from 'react-native'

import { Icon } from '@/components/shared/icon'
import { Title, Subtitle, Container, TextContainer, Button } from './elements'

export const ListItem: FC<Props> = ({ title, subTitle, onItemPress, actionConfig, rightSideText }) => {
  const { actionIcon = 'dots-vertical', showActionButton = false, onPress, actionSheetConfig } = actionConfig || {}

  const actionHandler = useCallback(() => generateHandler(actionSheetConfig, onPress), [onPress, actionSheetConfig])

  return (
    <Container>
      <Button onPress={onItemPress}>
        <TextContainer>
          <Title>{title}</Title>
          {subTitle ? <Subtitle>{subTitle}</Subtitle> : null}
        </TextContainer>
      </Button>
      {showActionButton ? (
        <TouchableOpacity onPress={actionHandler}>
          <Icon size={24} name={actionIcon} />
        </TouchableOpacity>
      ) : null}
      {rightSideText ? <Title>{rightSideText}</Title> : null}
    </Container>
  )
}

const generateHandler = (actionSheetConfig?: ActionConfig['actionSheetConfig'], onPress?: () => void): (() => void) => {
  if (onPress) return onPress
  if (!actionSheetConfig) throw new Error('Neither an actionSheetConfig nor a onPress handler were supplied.')
  const { handler, ...rest } = actionSheetConfig
  const sheetHandler = () =>
    ActionSheetIOS.showActionSheetWithOptions(rest, buttonIndex => {
      if (!buttonIndex) return
      handler(buttonIndex)
    })
  return sheetHandler
}

interface Props {
  title: string
  subTitle?: string
  onItemPress?: () => void
  actionConfig?: ActionConfig
  rightSideText?: string
}

interface ActionConfig {
  actionIcon?: string
  showActionButton?: boolean
  onPress?: () => void
  actionSheetConfig?: ActionSheetIOSOptions & ActionSheetHandler
}

interface ActionSheetHandler {
  handler: (indexChosen: number) => void
}
