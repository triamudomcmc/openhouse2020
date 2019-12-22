import styled from '@emotion/styled'
import { media } from '../design'

export const Wrapper = styled.div`
  max-width: 100%;
  height: 100vh;
  color: white;
  text-align: center;
  background-color: #1c1e28;
  padding-top: 24px;
  padding-bottom: 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media('TABLET')} {
    min-height: 100vh;
    height: unset;
  }
`
