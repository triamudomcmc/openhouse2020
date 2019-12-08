import React from 'react'
import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'
import { media } from '../design'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const Wrapper = styled.div`
  min-height: calc(95vh - 47px);
  max-width: 1000px;
  display: flex;
  margin: auto;
  align-items: center;
  animation: ${fadeIn} 2s cubic-bezier(0.39, 0.575, 0.565, 1);

  ${media('IPAD_PRO')} {
    max-width: 800px;
  }

  ${media('TABLET')} {
    max-width: 100%;
    min-height: 85vh;
    padding-left: 24px;
  }
`

const Title = styled.h1`
  font-weight: 800;
  font-size: 72px;
`

export const Header = () => {
  return (
    <Wrapper>
      <div>
        <Title>TRIAM UDOM</Title>
        <Title>OPEN HOUSE</Title>
        <Title>2020</Title>
      </div>
    </Wrapper>
  )
}
