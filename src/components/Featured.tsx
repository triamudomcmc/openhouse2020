import React from 'react'
import styled from '@emotion/styled'
import { Card } from './Card'

const Wrapper = styled.div`
  max-width: 100%;
  height: 70vh;
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
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  ::before {
    content: '';
    width: 10px;
  }

  ::after {
    content: '';
    width: 10px;
  }

  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
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
  border-color: black transparent transparent transparent;
`

export const Featured = () => {
  return (
    <section>
      <DiagTop />
      <Wrapper>
        <h1>Featured</h1>
        <FeaturedSliderWrapper>
          <FeaturedSlider>
            <Card width={280} height={254}>
              <div>Hellooooooo</div>
            </Card>
            <Card width={280} height={254}>
              <div>Hellooooooo</div>
            </Card>
            <Card width={280} height={254}>
              <div>Hellooooooo</div>
            </Card>
            <Card width={280} height={254}>
              <div>Hellooooooo</div>
            </Card>
            <Card width={280} height={254}>
              <div>Hellooooooo</div>
            </Card>
            <Card width={280} height={254}>
              <div>Hellooooooo</div>
            </Card>
            <Card width={280} height={254}>
              <div>Hellooooooo</div>
            </Card>
            <Card width={280} height={254}>
              <div>Hellooooooo</div>
            </Card>
            <Card width={280} height={254}>
              <div>Hellooooooo</div>
            </Card>
            <Card width={280} height={254}>
              <div>Hellooooooo</div>
            </Card>
            <Card width={280} height={254}>
              <div>Hellooooooo</div>
            </Card>
          </FeaturedSlider>
        </FeaturedSliderWrapper>
      </Wrapper>
      <DiagBottom />
    </section>
  )
}
