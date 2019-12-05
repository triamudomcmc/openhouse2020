import React from 'react'
import styled from '@emotion/styled'

import { Nav } from '../components/Nav'
import { Header } from '../components/Header'
import { Featured } from '../components/Featured'
import { Inside } from '../components/Inside'
import { ModalProvider } from '../components/ModalContext'

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
`

export default () => {
  return (
    <ModalProvider>
      <Nav />
      <Header />
      <Featured />
      <Inside />
    </ModalProvider>
  )
}
