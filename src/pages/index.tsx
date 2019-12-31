import React from 'react'
import { BackTop } from 'antd'

import { OverlayProvider } from '../components/OverlayContext'

import { Nav } from '../components/Nav'
import { Header } from '../components/Header'
import { Featured } from '../components/Featured'
import { Inside } from '../components/Inside'
import { Direction } from '../components/Direction'
import { Register } from '../components/Register'
import { Schedule } from '../components/Schedule'

export default () => {
  return (
    <OverlayProvider>
      <BackTop />
      <section>
        <Nav />
      </section>
      <section id="header">
        <Header />
      </section>
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
      <section id="register">
        <Register />
      </section>
    </OverlayProvider>
  )
}
