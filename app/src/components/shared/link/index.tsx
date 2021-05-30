import React, { FC, useCallback } from 'react'
import styled from 'styled-components/native'
import { Linking } from 'react-native'
import { regularFont } from '@/constants'

const LinkButton = styled.TouchableOpacity``
const LinkText = styled.Text`
  ${regularFont}
  color: ${({ theme }) => theme.primaryButtonColor};
`
const LinkContainer = styled.View`
  flex-direction: row;
`

export const Link: FC<LinkProps> = ({ link, label }) => {
  const goToLink = useCallback(() => {
    Linking.openURL(link)
  }, [link])
  return (
    <LinkContainer>
      <LinkButton onPress={goToLink}>
        <LinkText>{label}</LinkText>
      </LinkButton>
    </LinkContainer>
  )
}

interface LinkProps {
  label: string
  link: string
}
