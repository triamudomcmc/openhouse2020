import styled from '@emotion/styled'

export const Card = styled.div<{
  width: number
  minHeight?: number
  height?: number
  flex?: boolean
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
  ${props => (props.flex ? `display: flex; flex-direction: column;` : '')}
  ${props => `width: ${props.width}px;`}
  ${props =>
    !props.height && props.minHeight ? `min-height: ${props.minHeight}px;` : ''}
  ${props =>
    !props.minHeight && props.height ? `height: ${props.height}px;` : ''}
`

const FeaturedCardImage = styled.figure`
  height: 120px;
  margin: 0;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
  }
`

const FeaturedCardTitle = styled.div`
  padding: 10px 20px 15px;
  color: #fff;
  text-align: left;
`

export const FeaturedCard = (props: {
  width: number
  height: number
  imgSrc: string
  title: string
  bg?: string
  bordered?: boolean
}) => (
  <Card
    flex
    width={props.width}
    minHeight={props.height}
    bg={props.bg}
    bordered={props.bordered}
  >
    <FeaturedCardImage>
      <img decoding="async" src={props.imgSrc}></img>
    </FeaturedCardImage>
    <FeaturedCardTitle>
      <h1>{props.title}</h1>
    </FeaturedCardTitle>
  </Card>
)
