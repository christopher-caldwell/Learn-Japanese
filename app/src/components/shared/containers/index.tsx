import React, { FC } from 'react'
import { ActivityIndicator, SafeAreaView, RefreshControl } from 'react-native'
import styled from 'styled-components/native'

import { themeView } from '@/constants/theme'

export const ViewInnerContainer = styled.View<ViewContainerProps>`
  ${themeView}
  width: 100%;
  height: ${({ height = '100%' }) => height};
  padding: 2%;
`
interface ViewContainerProps {
  addPadding?: boolean
  height?: string
  center?: boolean
}
export const ViewContainer: FC<ViewContainerProps> = ({ children, height }) => (
  <ViewInnerContainer height={height}>
    <SafeAreaView>{children}</SafeAreaView>
  </ViewInnerContainer>
)

export const CenteredContainer = styled.View<ViewContainerProps>`
  height: ${({ height = '100%' }) => height};
  padding-horizontal: 5%;
  justify-content: center;
  ${({ center = false }) => (center ? 'align-items: center;' : '')}
`

interface FlexContainerProps {
  justify?: 'center' | 'flex-start' | 'flex-end' | 'space-evenly' | 'space-between'
  align?: 'center' | 'flex-start' | 'flex-end' | 'baseline'
  width?: string
  height?: string
  direction?: 'row' | 'column'
}
export const FlexContainer = styled.View<FlexContainerProps>`
  display: flex;
  justify-content: ${({ justify = 'center' }) => justify};
  align-items: ${({ align = 'center' }) => align};
  flex-direction: ${({ direction = 'row' }) => direction};
  ${({ height }) => (height ? `height: ${height};` : '')}
  ${({ width }) => (width ? `width: ${width};` : '')}
`

interface RefreshContainerProps {
  isRefreshing: boolean
  onRefresh: () => void
}

const ScrollViewWrapper = styled.ScrollView`
  height: 100%;
`
export const RefreshContainer: FC<RefreshContainerProps> = ({ children, isRefreshing, onRefresh }) => {
  return (
    <ScrollViewWrapper refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />}>
      {children}
    </ScrollViewWrapper>
  )
}

export const LoadingContainer = (
  <ViewContainer>
    <CenteredContainer>
      <ActivityIndicator />
    </CenteredContainer>
  </ViewContainer>
)
