import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'emotion-theming'
import Router from 'next/router'

import { GlobalStyle, theme } from '../design'
import * as gtag from '../lib/gtag'
import { CustomHead } from '../components/Head'

Router.events.on('routeChangeComplete', url => gtag.pageview(url))

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={theme}>
        <CustomHead />
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default MyApp
