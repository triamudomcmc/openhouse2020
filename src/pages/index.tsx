import React from 'react'
import { BackTop } from 'antd'
import styled from '@emotion/styled'

import { OverlayProvider } from '../components/OverlayContext'

import { Nav } from '../components/Nav'
import { Header } from '../components/Header'
import { Featured } from '../components/Featured'
import { Inside } from '../components/Inside'
import { Direction } from '../components/Direction'
import { Schedule } from '../components/Schedule'

const BackgroundWrapper = styled.div`
  background-image: url('/assets/img/bg.webp'), url('/assets/img/bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
`

export default () => {
  return (
    <OverlayProvider>
      <BackTop />
      <BackgroundWrapper>
        <section>
          <Nav />
        </section>
        <section id="header">
          <Header />
        </section>
      </BackgroundWrapper>

      <section id="featured">
        <Featured />
      </section>
      <section id="inside">
        <Inside />
      </section>
      <section id="schedule">
        <Schedule />
      </section>
      <section id="direction">
        <Direction />
      </section>
    </OverlayProvider>
  )
}
