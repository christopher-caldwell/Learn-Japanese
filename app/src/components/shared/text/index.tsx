import styled from 'styled-components/native'

import { regularFont, boldFont, themeText } from '@/constants'

interface TitleProps {
  fontSize?: string
}
export const Title = styled.Text<TitleProps>`
  ${boldFont}
  ${themeText}
  font-size: ${({ fontSize = '20px' }) => fontSize};
`

export const Subtitle = styled.Text<TitleProps>`
  ${regularFont}
  ${themeText}
  font-size: ${({ fontSize = '18px' }) => fontSize};
`
