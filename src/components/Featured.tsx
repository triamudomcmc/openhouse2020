import React from 'react'
import styled from '@emotion/styled'
import { Card } from './Card'

const Wrapper = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  background-color: black;
  overflow-y: hidden;
  padding-top: 24px;
  padding-bottom: 24px;
  position: relative;
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

export const Featured = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  )
}
