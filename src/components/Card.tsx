import styled from '@emotion/styled'
import { media, Fonts } from '../design'

export const Card = styled.div<{
  width: number
  minHeight?: number
  height?: number
  flex?: boolean
  bg?: string
  bordered?: boolean
  curved?: boolean
  padding?: boolean
}>`
  ${props =>
    props.bordered
      ? `
  border-color: #323639;
  border-style: solid;
  border-width: 0.5px;`
      : ''}

  font-family: ${Fonts.display};

  ${props => (props.padding ? 'padding: 24px;' : '')}

  ${props => (props.curved ? 'border-radius: 8px;' : '')}
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
  color: ${props => (props.bg === 'white' ? 'black' : 'white')};

  background-color: ${props => (props.bg ? props.bg : '#111111')};
  ${props => (props.flex ? `display: flex; flex-direction: column;` : '')}
  ${props => `width: ${props.width}px;`}
  max-width: 100%;
  overflow: auto;
  ${props => (props.minHeight ? `min-height: ${props.minHeight}px;` : '')}
  ${props => (props.height ? `height: ${props.height}px;` : '')}

  ${media('TABLET')} {
    width: 85vw;
  }
`

const FeaturedCardImage = styled.figure`
  height: 120px;
  margin: 0;
  overflow: hidden;

  picture {
    width: 100%;
    height: 100%;
  }

  img {
    object-fit: cover;
    width: 100%;
  }
`

const FeaturedCardTitleWrapper = styled.div`
  padding: 15px 20px 15px;
`

const FeaturedCardTitle = styled.h1`
  color: #fff;
  text-align: left;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.15;
`

const CustomCard = styled(Card)`
  transition: all 1s;
  cursor: pointer;

  :hover {
    border-color: white;
  }
`

export const FeaturedCard = (props: {
  width: number
  height: number
  imgSrc: string
  title: string
  bg?: string
  bordered?: boolean
}) => (
  <CustomCard
    flex
    curved
    width={props.width}
    minHeight={props.height}
    bg={props.bg}
    bordered={props.bordered}
  >
    <FeaturedCardImage>
      <picture>
        <source srcSet={`${props.imgSrc}.webp`} type="image/webp" />
        <source srcSet={`${props.imgSrc}.jpg`} type="image/jpeg" />
        <img decoding="async" src={`${props.imgSrc}.jpg`} alt={props.title} />
      </picture>
    </FeaturedCardImage>
    <FeaturedCardTitleWrapper>
      <FeaturedCardTitle>{props.title}</FeaturedCardTitle>
    </FeaturedCardTitleWrapper>
  </CustomCard>
)
