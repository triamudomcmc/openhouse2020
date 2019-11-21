import React from "react"
import App from "next/app"
import { GlobalStyle, theme } from "../design"
import { ThemeProvider } from "emotion-theming"

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default MyApp
