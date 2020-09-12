import styled from 'styled-components'

interface ColProps {
  cols?: number
  center?: boolean
}

const Col = styled.div<ColProps>`
  width: ${({ cols = 12 }) => (cols / 12) * 100}%;
  float: left;
  ${({ center = false }) => (center ? 'display: flex; justify-content: center;' : '')}
`

export default Col
