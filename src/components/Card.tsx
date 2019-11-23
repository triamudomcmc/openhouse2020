import styled from '@emotion/styled'

export const Card = styled.div<{ width: number; height: number; bg?: string }>`
  border-radius: 8px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
  color: white;
  border: grey;
  background-color: ${props => (props.bg ? props.bg : '#111111')};
  ${props => `width: ${props.width}px`};
  ${props => `height: ${props.height}px`};
`
