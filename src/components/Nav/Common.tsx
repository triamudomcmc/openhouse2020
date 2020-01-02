import styled from '@emotion/styled'
import { media, Fonts } from '../../design'
import { BookOpen } from 'react-feather'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: auto;
  max-width: 1200px;
  padding-top: 24px;

  ${media('IPAD_PRO')} {
    max-width: 800px;
  }

  ${media('TABLET')} {
    padding-left: 24px;
    padding-right: 24px;
    align-items: center;
  }
`

export const Link = styled.a`
  margin-right: 20px;
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;
  color: white;
  font-weight: 700;
  font-family: ${Fonts.display};
  transition: color 1s;

  :last-child {
    margin-right: 0px;
  }

  /* :hover {
    color: black;
  } */

  ${media('TABLET')} {
    margin-right: 0px;
    margin-bottom: 12px;
    text-align: end;

    :last-child {
      margin-bottom: 0px;
    }
  }
`

export const Logo = styled.div`
  flex-grow: 1;
`

export const Title = styled.h1`
  color: white;
  font-weight: 800;
  font-size: 16px;
  z-index: 9999;
`

export const SchoolLink = styled(BookOpen)`
  cursor: pointer;
  color: white;
`
