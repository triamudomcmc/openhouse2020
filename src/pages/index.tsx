import React from 'react'

import { Nav } from '../components/Nav'
import { Header } from '../components/Header'
import { Featured } from '../components/Featured'
import { Inside } from '../components/Inside'
import { Direction } from '../components/Direction'

export default () => {
  return (
    <OverlayProvider>
      <Nav />
      <Header />
      <Featured />
      <Inside />
      <section>
        <Direction />
      </section>
    </OverlayProvider>
  )
}
