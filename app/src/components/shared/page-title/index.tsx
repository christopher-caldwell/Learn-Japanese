import React, { FC } from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'

import { Title, Icon, Subtitle } from '@/components/shared'

export const PageTitle: FC<PageTitleProps> = ({
  title,
  subTitle,
  shouldShowIcons = true,
  icons = [],
  hasBottomMargin = true,
  children,
}) => {
  return (
    <>
      <TitleContainer hasBottomMargin={hasBottomMargin}>
        <View>
          <Title fontSize='28px'>{title}</Title>
          {subTitle ? <Subtitle>{subTitle}</Subtitle> : null}
        </View>
        {shouldShowIcons ? (
          <ActionContainer>
            {icons.map(({ handler, name, isVisible = true, size = 28 }, index) =>
              isVisible ? (
                <IconButton key={index + name} onPress={handler}>
                  <Icon name={name} size={size} />
                </IconButton>
              ) : null
            )}
          </ActionContainer>
        ) : null}
      </TitleContainer>
      {children}
    </>
  )
}

export interface HeaderIconConfig {
  name: string
  handler: () => void
  isVisible?: boolean
  size?: number
}

export interface PageTitleProps extends TitleProps {
  title: string
  subTitle?: string
  shouldShowIcons?: boolean
  icons?: HeaderIconConfig[]
}

interface TitleProps {
  hasBottomMargin?: boolean
}
export const TitleContainer = styled.View<TitleProps>`
  justify-content: space-between;
  flex-direction: row;
  margin-top: 5%;
  margin-bottom: ${({ hasBottomMargin }) => (hasBottomMargin ? '5%' : '0')};
`

export const ActionContainer = styled.View`
  flex-direction: row;
`

export const IconButton = styled.TouchableOpacity`
  margin-left: 20px;
`
