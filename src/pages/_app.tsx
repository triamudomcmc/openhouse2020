import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'emotion-theming'

import { GlobalStyle, theme } from '../design'
import { CustomHead } from '../components/Head'

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
