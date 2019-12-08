import React from 'react'

import { Nav } from '../components/Nav'
import { Header } from '../components/Header'
import { Featured } from '../components/Featured'
import { Inside } from '../components/Inside'
import { OverlayProvider } from '../components/OverlayContext'

export default () => {
  return (
    <OverlayProvider>
      <Nav />
      <Header />
      <Featured />
      <Inside />
    </OverlayProvider>
  )
}
