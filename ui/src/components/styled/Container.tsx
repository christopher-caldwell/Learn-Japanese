import styled from 'styled-components'

interface ContainerProps {
  justify?: 'center' | 'space-between' | 'start' | 'end' | 'space-evenly'
  align?: string
  width?: number
  height?: number
}

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: ${({ justify = 'start' }) => justify};
  align-items: ${({ align = 'top' }) => align};
  width: ${({ width = '100' }) => width}%;
  height: ${({ height = '100' }) => height}%;
`

export default Container
