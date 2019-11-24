import styled from '@emotion/styled'

export const Card = styled.div<{
  width: number
  height: number
  bg?: string
  bordered?: boolean
}>`
  ${props =>
    props.bordered
      ? `border-radius: 8px;
  border-color: #323639;
  border-style: solid;
  border-width: 0.5px;`
      : ''}

  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
  color: white;
  background-color: ${props => (props.bg ? props.bg : '#111111')};
  ${props => `width: ${props.width}px`};
  ${props => `height: ${props.height}px`};
`
