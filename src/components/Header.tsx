import React from 'react'
import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'
import { media } from '../design'
import { Register } from './Register'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const Wrapper = styled.div`
  min-height: calc(95vh - 72px);
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  align-items: center;
  animation: ${fadeIn} 2s cubic-bezier(0.39, 0.575, 0.565, 1);

  ${media('IPAD_PRO')} {
    max-width: 800px;
  }

  ${media('TABLET')} {
    flex-direction: column;
    justify-content: flex-start;
  }
`

const Title = styled.h1`
  font-weight: 800;
  font-size: 72px;
  line-height: 1.15;
  color: white;
`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  min-height: calc(95vh - 72px);
  padding-left: 24px;
`

const RegisterWrapper = styled.div`
  ${media('TABLET')} {
    padding-bottom: 48px;
  }
`

export const Header = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <div>
          <Title>TRIAM UDOM</Title>
          <Title>OPEN HOUSE</Title>
          <Title>2020</Title>
        </div>
      </TitleWrapper>
      <RegisterWrapper>
        <Register />
      </RegisterWrapper>
    </Wrapper>
  )
}
