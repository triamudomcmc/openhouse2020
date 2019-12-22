import React from 'react'

import { OverlayProvider } from '../components/OverlayContext'

import { Nav } from '../components/Nav'
import { Header } from '../components/Header'
import { Featured } from '../components/Featured'
import { Inside } from '../components/Inside'
import { Direction } from '../components/Direction'
import { Register } from '../components/Register'

export default () => {
  return (
    <OverlayProvider>
      <section>
        <Nav />
      </section>
      <section>
        <Header />
      </section>
      <section>
        <Featured />
      </section>
      <section>
        <Inside />
      </section>
      <section>
        <Direction />
      </section>
      <section>
        <Register />
      </section>
    </OverlayProvider>
  )
}
