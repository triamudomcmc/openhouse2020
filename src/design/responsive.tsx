const breakpoints = {
  PHONE_SM: 320,
  PHONE: 376,
  PHABLET: 540,
  TABLET: 768,
  IPAD_PRO: 1024,
  DESKTOP: 1070,
  DESKTOP_MD: 1280,
  DESKTOP_LG: 1440
}

type MediaType =
  | 'PHONE_SM'
  | 'PHONE'
  | 'PHABLET'
  | 'TABLET'
  | 'IPAD_PRO'
  | 'DESKTOP'
  | 'DESKTOP_MD'
  | 'DESKTOP_LG'

export const media = (type: MediaType | number) => {
  if (typeof type === 'number') {
    return `@media (max-width: ${type}px)`
  }

  return `@media (max-width: ${breakpoints[type]}px)`
}
