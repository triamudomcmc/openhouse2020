import React from 'react'
import styled from '@emotion/styled'

import { FeaturedCard } from './Card'
import { TUCMC, TUSC, AIC } from './Logo'

const Wrapper = styled.div`
  max-width: 100%;
  color: white;
  text-align: center;
  background-color: black;
  overflow-y: hidden;
  padding-top: 24px;
  padding-bottom: 24px;
`

const FeaturedSliderWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 48px;
`

const FeaturedSlider = styled.div`
  max-width: 100%;
  display: grid;
  grid-column-gap: 24px;
  grid-auto-flow: column;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::before {
    content: '';
    width: 10px;
  }

  ::after {
    content: '';
    width: 10px;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`

const DiagTop = styled.div`
  border-style: solid;
  border-width: 50px 100vw 0 0;
  border-color: transparent black transparent transparent;
`

const DiagBottom = styled.div`
  border-style: solid;
  border-width: 50px 100vw 0 0;
  border-color: black #1c1e28 transparent transparent;
`

const Title = styled.h1`
  font-size: 48px;
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 48px;

  svg {
    margin-left: 24px;
    fill: grey;
    transition: fill 1s;

    :hover {
      fill: #fff;
    }

    :first-of-type {
      margin-left: 0px;
    }
  }
`

const MockData = [
  'Triam Udom Open House 2020',
  'Triam Udom Open House 2020',
  'Triam Udom Open House 2020',
  'Triam Udom Open House 2020',
  'Triam Udom Open House 2020',
  'Triam Udom Open House 2020',
  'Triam Udom Open House 2020',
  'Triam Udom Open House 2020',
  'Triam Udom Open House 2020',
  'Triam Udom Open House 2020',
  'Triam Udom Open House 2020',
  'Triam Udom Open House 2020',
  'Triam Udom Open House 2020',
  'Triam Udom Open House 2020',
  'Triam Udom Open House 2020'
]

export const Featured = () => {
  return (
    <section>
      <DiagTop />
      <Wrapper>
        <Title>Featuring</Title>
        <FeaturedSliderWrapper>
          <FeaturedSlider>
            {MockData.map(val => (
              <FeaturedCard
                width={280}
                height={200}
                bordered
                title={val}
                imgSrc=""
              />
            ))}
          </FeaturedSlider>
        </FeaturedSliderWrapper>
        <LogoWrapper>
          <TUCMC />
          <TUSC />
          {/* <AIC /> */}
        </LogoWrapper>
      </Wrapper>
      <DiagBottom />
    </section>
  )
}
