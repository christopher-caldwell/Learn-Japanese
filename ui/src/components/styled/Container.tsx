import styled from 'styled-components'

interface ContainerProps {
  justify?: 'center' | 'space-between' | 'start' | 'end' | 'space-evenly'
  align?: string
  width?: number
  height?: number
  padding?: string
}

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: ${({ justify = 'start' }) => justify};
  align-items: ${({ align = 'top' }) => align};
  width: ${({ width = '100' }) => width}%;
  height: ${({ height = '100' }) => height}%;
  padding: ${({ padding = 0 }) => padding};
`

export default Container
