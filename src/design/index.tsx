import { Global, css } from '@emotion/core'
import reset from '../lib/reset'

export function getSystemFonts() {
  return [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    'sans-serif'
  ]
}

export const Fonts = {
  display: [
    'Sukhumvit Set',
    'Kanit',
    'SF Pro Display',
    'Montserrat',
    ...getSystemFonts()
  ].join(', '),
  body: [...getSystemFonts()].join(', ')
}

const TH_UNICODE_RANGE = 'U+0E01-0E5B, U+200C-200D, U+25CC'

export const GlobalStyle = () => (
  <Global
    styles={css`
      ${reset}

      @font-face {
        font-family: 'Kanit';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/assets/fonts/Kanit-Regular.woff2') format('woff2');
        unicode-range: ${TH_UNICODE_RANGE};
      }

      @font-face {
        font-family: 'Sukhumvit Set';
        font-display: swap;
        src: local('Sukhumvit Set');
        unicode-range: ${TH_UNICODE_RANGE};
      }
    `}
  />
)

export const theme = {
  fonts: {
    body: Fonts.body,
    heading: Fonts.display,
    monospace: 'Menlo, monospace'
  }
}
